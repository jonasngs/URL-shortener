const pool = require("../db");
const { nanoid } = require("nanoid");
const validUrl = require("valid-url");
const baseURL = "http://localhost:5000";

async function shortenURL(req, res) {
    try {
      const { longURL } = req.body;
      if (!validUrl.isUri(longURL)) {
        throw new Error("Invalid URL");
      } else {
        const urlMapping = await pool.query(
          "SELECT long_url, short_url FROM url_tab WHERE long_url = $1",
          [longURL]
        )
        console.log(longURL);
        if (urlMapping.rows.length == 0) { // Long URL does not exist in db
          const shortId = await generateShortURL();
          const shortURL = baseURL + "/" + shortId
          const newURL = await pool.query(
            "INSERT INTO url_tab (long_url, short_url, created_at) VALUES ($1, $2, $3) RETURNING *",
            [longURL, shortURL, generateEpoch()]
          )
  
          res.status(200).json({ shortURL: shortURL })
        } else {
          // Long URL exists in db, return short url
          res.status(200).json({ shortURL: urlMapping.rows[0]["short_url"]})
        }
      }
      
    } catch (err) {
      res.status(400).json({ 'error': err.message});
      console.log(err);
    }
}

async function queryLongURL(req, res) {
  const { shortId } = req.params;
  
  return res.redirect()
}

// Function to regenerate short URL in the event of collision, with a maximum of 3 retries
async function generateShortURL() {
  var retries = 3;
  while (retries > 0) {
    const shortId = nanoid(7);
    const shortURLRecord = await pool.query(
      "SELECT short_url FROM url_tab WHERE long_url = $1",
      [baseURL + "/" + shortId]
    )
    if (shortURLRecord.rows.length != 0) { // short URL already exists in db
      retries--;
      continue;
    }
    return shortId;
  }

  throw new Error('Error while generating short URL.')
}

function generateEpoch() {
  return Math.floor(Date.now() / 1000)
}

module.exports = { shortenURL, queryLongURL }
const pool = require("../db");
// const nanoid = require("nanoid")

async function shortenURL(req, res) {
    try {
      const { longURL } = req.body;
      const urlMapping = await pool.query(
        "SELECT * FROM url_tab WHERE long_url = $1",
        ["http://longurl"]
      )
      if (urlMapping.rows.length == 0) { // Long URL does not exist in db
        const newURL = await pool.query(
          "INSERT INTO url_tab (long_url, short_url, created_at) VALUES ($1, $2, $3) RETURNING *",
          ["http://longurl", "http://shorturl", Math.floor(Date.now() / 1000)]
        )
        // const shortId = 
      }

      res.status(200).json({ longURL: urlMapping.rows[0]["long_url"]})
      // console.log(urlMapping.rows[0]["long_url"]);
      
    } catch (err) {
      console.log(err);
    }
}

async function queryLongURL(req, res) {
  const { shortId } = req.params;
}

module.exports = { shortenURL, queryLongURL }
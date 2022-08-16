const pool = require("../db");
const baseURL = "https://url-shortener-tap.herokuapp.com";

async function queryLongURL(req, res) {
  try {
    const { shortId } = req.params;
    const shortURL = baseURL + "/" + shortId;
    const urlMapping = await pool.query(
      "SELECT long_url FROM url_tab WHERE short_url = $1",
      [shortURL]
    );
    if (urlMapping.rows.length == 0) { // Short URL does not exist in db
      throw new Error("Short URL is invalid");
    } else {
      res.status(200).json({longURL: urlMapping.rows[0]["long_url"]});
    }
  } catch (err) {
    res.status(400).json({ 'error': err.message });
  } 
}

module.exports = { queryLongURL }
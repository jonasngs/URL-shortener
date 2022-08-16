const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: "5433",
  database: "url_shortener_db"
})

module.exports = pool;
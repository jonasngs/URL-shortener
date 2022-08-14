const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { shortenURL, queryLongURL } = require("./controller/urlShortener");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// routes

// Shorten long url
app.post("/shorten-url", shortenURL);

// Query long url
app.get("/:shortId", queryLongURL);

app.get("/", (req, res) => {});

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));

const express = require("express");
const app = express();
const cors = require("cors");
const { shortenURL} = require("./controller/shortenURL");
const { queryLongURL } = require("./controller/queryLongURL");
const PORT = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// Shorten long url
app.post("/shorten-url", shortenURL);

// Query long url
app.get("/:shortId", queryLongURL);

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));

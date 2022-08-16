const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { shortenURL} = require("./controller/shortenURL");
const { queryLongURL } = require("./controller/queryLongURL");
const PORT = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  // });
}

// Shorten long url
app.post("/api/shorten-url", shortenURL);

// Query long url
app.get("/api/:shortId", queryLongURL);

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));

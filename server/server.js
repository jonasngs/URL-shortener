const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// routes

// Shorten url
app.post("/shorten-url", async (req, res) => {
  try {
    console.log(req.body)
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/", (req, res) => {});

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));

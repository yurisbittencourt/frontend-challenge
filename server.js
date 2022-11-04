const express = require("express");
const bodyParser = require("body-parser");
const ogs = require("open-graph-scraper");

const app = express();

app.use(express.static("client/out"));

const path = require("path");
const { type } = require("os");
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "out", "index.html"));
});

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, HOST, () => {
  console.log(`Server started...`);
});

app.get("/api/scrapper", (req, res) => {
  const options = { url: req.query.url };
  ogs(options)
    .then((data) => {
      const { result } = data;
      const imgUrl = Array.isArray(result.ogImage)
        ? result.ogImage[0].url
        : result.ogImage.url;
      return res.json({ url: imgUrl });
    })
    .catch(() => {
      res.status(500).send("Something broke!");
    });
});

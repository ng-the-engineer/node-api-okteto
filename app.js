const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 8080;

app.get("/data", (req, res) => {
  console.log("/data is called, path = ", path.join(__dirname, "/data.csv"));
  fs.readFile(
    path.join(__dirname, "/data.csv"),
    { encoding: "utf-8" },
    (err, f) => {
      if (err) console.log(err);

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, GET");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      console.log("file=", file);
      res.send(f);
    }
  );
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

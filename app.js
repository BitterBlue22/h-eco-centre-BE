const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./routers/apiRouter");
const MongoClient = require("mongodb").MongoClient;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", apiRouter);

MongoClient.connect("mongodb-connection-string", (err, client) => {
  // ...
});

app.listen(3000, function () {
  console.log("listening on 3000");
});

module.exports = app;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./routers/apiRouter");
const connectionString = require("./config");
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionString, {
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("h-eco-centre-db");
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use("/", apiRouter);
    app.listen(3000, function () {
      console.log("listening on 3000");
    });
  })
  .catch((error) => console.error(error));

module.exports = app;

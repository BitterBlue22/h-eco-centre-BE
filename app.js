const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routers/apiRouter");

app.use(express.json());
app.use(cors());
app.use("/", apiRouter);

app.listen(3000, function () {
  console.log("listening on 3000");
});

module.exports = app;

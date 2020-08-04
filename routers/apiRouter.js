const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.status(200).send("Api running");
});

module.exports = apiRouter;

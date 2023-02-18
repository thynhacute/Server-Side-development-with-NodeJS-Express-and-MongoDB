const express = require("express");
const bodyParser = require("body-parser");
const playerController = require("../controllers/playerController");
const playerRouter = express.Router();
playerRouter.use(bodyParser.json());
playerRouter
  .route("/")
  .get(playerController.index)
  .post(playerController.create);
playerRouter
  .route("/edit/:playerId")
  .get(playerController.formEdit)
  .post(playerController.edit);
playerRouter.route("/delete/:playerId").get(playerController.delete);
module.exports = playerRouter;

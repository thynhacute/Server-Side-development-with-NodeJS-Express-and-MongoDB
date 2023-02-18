const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Schema = mongoose.Schema;
var playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    goals: {
      type: Number,
      required: true,
    },
    isCaptain: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var players = mongoose.model("players", playerSchema);

module.exports = players;

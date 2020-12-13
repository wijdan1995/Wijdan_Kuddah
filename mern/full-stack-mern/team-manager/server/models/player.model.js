const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, "Name is required" ],
		minlength: [2, "Name must be at least 2 characters long"]
	},
	preferredPos: {
		type: String,
		default: ""
	},
	game1:{
		status:{
			type: String,
			default: "Undecided"
		}
	},
	game2:{
		status:{
			type: String,
			default: "Undecided"
		}
	},
	game3:{
		status:{
			type: String,
			default: "Undecided"
		}
	},
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
const mongoose = require("mongoose");

const NinjutsuSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Ninjutsu Name is required"]
	}
});

const NinjaSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minlength: [3, "Name must be at least 3 characters long"]
	},
	image: String,
	description: {
		type: String,
		minlength: [3, "Name must be at least 3 characters long"],
        required: [ true, "Description is required" ]
	},
	ninjutsu: [NinjutsuSchema]
}, { timestamps: true });

module.exports.Ninjutsu = mongoose.model("Ninjutsu", NinjutsuSchema);
module.exports.Ninja = mongoose.model("Ninja", NinjaSchema);

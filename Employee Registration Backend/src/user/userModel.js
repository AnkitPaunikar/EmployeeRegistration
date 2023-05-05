const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("employees", userSchema);

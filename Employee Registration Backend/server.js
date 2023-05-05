const express = require("express");
const server = express();
const mongoose = require("mongoose");
const routes = require("./routes/route");
const cors = require("cors");

mongoose
	.connect("mongodb://localhost:27017/registration", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to DB"))
	.catch((error) => console.log(error));

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function (error) {
	if (error) {
		console.log("There is a error");
	} else {
		console.log("server connected");
	}
});

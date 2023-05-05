const userService = require("./userService");

const getDataControllerfn = async (req, res) => {
	let empDetails = await userService.getDataFromDBService();
	res.send({ status: true, data: empDetails });
};

const createUserControllerfn = async (req, res) => {
	let status = await userService.createUserDBService(req.body);

	if (status) {
		res.send({ status: true, message: "User Created" });
	} else {
		res.send({ status: true, message: "Error Creating User" });
	}
};

const updateUserControllerfn = async (req, res) => {
	let status = await userService.upateUserDBService(req.params.id, req.body);
	if (status) {
		res.send({ status: true, message: "User Updated" });
	} else {
		res.send({ status: false, message: "Error Updating User" });
	}
};

const deleteUserControllerfn = async (req, res) => {
	let status = await userService.deleteUserDBService(req.params.id);
	if (status) {
		res.send({ status: true, message: "User Deleted" });
	} else {
		res.send({ status: false, message: "Error Deleting User" });
	}
};

module.exports = {
	getDataControllerfn,
	createUserControllerfn,
	updateUserControllerfn,
	deleteUserControllerfn,
};

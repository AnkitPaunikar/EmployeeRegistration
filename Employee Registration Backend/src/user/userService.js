const userModel = require("./userModel");

// comst mysql = require('mysql');

// const con = mysql.createConnection({
// 	host: "localhost",
// 	user: "yourusername",
// 	password: "yourpassword",
// 	database: "mydb"
//   });

//   con.connect(function(err) {
// 	if (err) throw err;
// 	con.query("SELECT name, address FROM customers", function (err, result, fields) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });

module.exports.getDataFromDBService = () => {
	return new Promise((resolve) => {
		// con.query("SELECT name, address ,phone FROM employee", function (err, result, fields) {
		// 	  if (err) throw err;
		// 	  console.log(result);
		// 	});
		//   });
		userModel.find().then(function (lists) {
			resolve(lists);
		});
	});
};

module.exports.createUserDBService = (userDetail) => {
	return new Promise((resolve, reject) => {
		let userModelData = new userModel();

		userModelData.name = userDetail.name;
		userModelData.address = userDetail.address;
		userModelData.phone = userDetail.phone;

		// var sql = "INSERT INTO employee (name, address,phone) VALUES (userDetail.name, userDetail.address,userDetail.phone)";
		// con.query(sql, function (err, result) {
		//   if (err) throw err;
		//   console.log("1 record inserted");
		// });

		userModelData.save().then(resolve(true)).catch(reject(false));
	});
};

module.exports.upateUserDBService = (userId, userBody) => {
	return new Promise((resolve) => {
		// con.connect(function(err) {
		// 	if (err) throw err;
		// 	const sql = "UPDATE employee SET address = 'Canyon 123' WHERE address = 'Valley 345'";
		// 	con.query(sql, function (err, result) {
		// 	  if (err) throw err;
		// 	  console.log(result.affectedRows + " record(s) updated");
		// 	});
		userModel.findByIdAndUpdate(userId, userBody).then((result) => {
			resolve(result);
		});
	});
};

module.exports.deleteUserDBService = (userId) => {
	return new Promise((resolve) => {
		// con.connect(function(err) {
		// 	if (err) throw err;
		// 	const sql = "DELETE FROM employee WHERE _id = userId";
		// 	con.query(sql, function (err, result) {
		// 	  if (err) throw err;
		// 	  console.log("Number of records deleted: " + result.affectedRows);
		// 	});

		userModel.findByIdAndDelete(userId).then((result) => {
			resolve(result);
		});
	});
};

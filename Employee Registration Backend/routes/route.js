let express = require("express");
const router = express.Router();
const userController = require("../src/user/userController");

router.route("/user/getAll").get(userController.getDataControllerfn);
router.route("/user/create").post(userController.createUserControllerfn);
router.route("/user/update/:id").patch(userController.updateUserControllerfn);
router.route("/user/delete/:id").delete(userController.deleteUserControllerfn);

module.exports = router;

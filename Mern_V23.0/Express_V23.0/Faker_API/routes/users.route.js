const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/new", userController.newUser);
router.get("/company", userController.newUserWithCompany);

module.exports = router;

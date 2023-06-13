const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companies.controller");

router.get("/new", companyController.newCompany);

module.exports = router;

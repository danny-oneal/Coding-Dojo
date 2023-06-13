const { createCompany } = require("../services/companies.service");

function newCompany(req, res, next) {
    return res.json(createCompany());
}

module.exports = {
    newCompany
};

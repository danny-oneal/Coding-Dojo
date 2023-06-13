const { createUser } = require("../services/users.service");
const { createCompany } = require("../services/companies.service");

function newUser(req, res, next) {
    return res.json(createUser());
}

function newUserWithCompany(req, res, next) {
    const user = createUser();
    const company = createCompany();
    return res.json({ user, company });
}

module.exports = {
    newUser,
    newUserWithCompany
};

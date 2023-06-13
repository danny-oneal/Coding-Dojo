const { faker } = require("@faker-js/faker");

function createUser() {
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number("(###) ###-####"),
        email: faker.internet.email(),
        password: faker.internet.password(),
        _id: faker.database.mongodbObjectId()
    };
    return user;
}

module.exports = {
    createUser
};

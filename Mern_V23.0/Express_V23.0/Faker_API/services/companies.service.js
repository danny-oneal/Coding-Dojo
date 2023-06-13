const { faker } = require("@faker-js/faker");

function createCompany() {
    const company = {
        name: faker.company.name(),
        _id: faker.database.mongodbObjectId(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return company;
}

module.exports = {
    createCompany
};

let factory = require('node-model-factory');

factory.define('Restaurant', function (faker, factory) {
    return {
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        url: faker.internet.url(),
        address: factory.make('Address')
    }
});

factory.define('Address', function (faker) {
    return {
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipcode: faker.address.zipCode()
    }
});

module.exports = factory;
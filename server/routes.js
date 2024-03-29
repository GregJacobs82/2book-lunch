/* eslint-disable */
const factory = require('./db/factories/factory.js');
// import { factory } from './db/factories/factory.js'

function Routes(app) {
    // this.$axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.data)
    //     .then(users => this.users = users);

    app.get('/api/restaurants', (req, res) => {
        const restaurants = factory.times(20).make('Restaurant')
        // console.log(restaurants);
        return res.json(restaurants)
    })

    app.get('/api/restaurants/:id', (req, res) => {
        const id = req.params.id
        let restaurant = factory.make('Restaurant', { id: id });
        return res.json(restaurant);
    })
}

module.exports = Routes

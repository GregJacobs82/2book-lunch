function Routes (app) { 
    
    app.get('/api/restaurants', (req, res) => {
        return res.json([
            {
                id: '1',
                name: 'restaruant 1',
                url: 'https://www.somethinghere.com'
            }
        ])
    });

    app.get('/api/restaurants/:id', (req, res) => {
        let id = req.params.id
        return res.json({ id })
    });    
}

module.exports = Routes;
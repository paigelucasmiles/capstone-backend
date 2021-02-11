const express = require('express');
const app = express();
const port = process.env.PORT || 4000
const cors = require('cors');
const database = require('./database/database');

const { Model } = require('objection');
Model.knex(database)

const Product = require('./models/Product');
const Cart = require('./models/Cart');


app.use(cors());

app.get('/', (request, response) => {
    response.json({ message: 'This is CORS-enabled for all origins!'});
})

app.get('/products', (request, response) => {
    Product.query()
        .then(products => response.json({ products }));
})

app.get('/cart', (request, response) => {
    Cart.query()
        .then(item => response.json({ item }));
})

app.listen(4000, () => console.log(`CORS-enabled web server listening on ${port}`));
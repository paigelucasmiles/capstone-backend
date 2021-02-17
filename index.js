const express = require('express');
const app = express();
const port = process.env.PORT || 4000
const cors = require('cors');
const database = require('./database/database');
require('dotenv').config();

// const paypal = require('@paypal/checkout-server-sdk');
// let clientId = process.env.PAYPAL_CLIENT_ID;
// let clientSecret = process.env.PAYPAL_SECRET;
// let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
// let client = new paypal.core.PayPalHttpClient(environment);

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Model } = require('objection');
Model.knex(database)

const Product = require('./models/Product');
const Cart = require('./models/Cart');
const User = require('./models/User');


app.use(cors());
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.json({ message: 'This is CORS-enabled for all origins!'});
})

// create a new user
app.post('/users', (request, response) => {
    const { user } = request.body
    bcrypt.hash(user.password, 12)
        .then(hashedPassword => {
            return User.query().insert({
                "firstName": user.firstName,
                "lastName": user.lastName,
                "email": user.email,
                "passwordHash": hashedPassword
            }).returning("*")
        }).then(users => {
            const user = users

            response.json( user )
        }).catch(error => {
            response.json({ error: error.message })
        })
})

// login a user
app.post('/login', (request, response) => {
    const { user } = request.body

    User.query()
        .select()
        .where('email', user.email)
        .first()
        .then(retreivedUser => {
            if (!retreivedUser.id) throw new Error("No user, Yo!")

            return Promise.all([
                bcrypt.compare(user.password, retreivedUser.passwordHash),
                Promise.resolve(retreivedUser)
            ])
        }).then(results => {
            const arePasswordsTheSame = results[0]
            const user = results[1]
            if (!arePasswordsTheSame) throw new Error("incorrect password")

            const payload = { email: user.email }
            const secret = "shhhhh"

            jwt.sign(payload, secret, (error, token) => {
                if (error) throw new Error("signing didn't work")

                response.json({ user, token })
            })
        }).catch(error => {
            response.json({error: error.message})
        })
})

app.get('/profile', authenticate, (request, response) => {
    response.json({ user: request.user })
})

function authenticate(request, response, next) {
    const authHeader = request.get('Authorization')
    const token = authHeader.split(" ")[1]

    const secret = "shhhhh"

    jwt.verify(token, secret, (error, payload) => {
        if (error) response.json({ error: error.message })

        User.query()
            .select()
            .where({ email: payload.email })
            .first()
            .then(user => {
                request.user = user
                next()
            }).catch(error => {
                response.json({ error: error.message })
            })
    })
}

app.get('/products', (request, response) => {
    Product.query()
        .then(products => response.json({ products }));
})

app.get('/cart', (request, response) => {
    Cart.query()
        .then(item => response.json({ item }));
})

app.post('/cart', (request, response) => {
    const { product } = request.body

    return Cart.query().insert({
        productId: product.id, 
        productColor: product.color, 
        productSize: product.size, 
        productQuantity: product.quantity
    }).returning("*")
    .then(products => {
        const product = products

        response.json(product)
    }).catch(error => {
        response.json({ error: error.message })
    })
})

app.put('/updateCart', (request, response) => {
    const { itemToUpdate } = request.body

    console.log(itemToUpdate)

    Cart.query()
        .update({
            id: itemToUpdate.id,
            productColor: itemToUpdate.productColor,
            productId: itemToUpdate.productId,
            productQuantity: itemToUpdate.productQuantity,
            productSize: itemToUpdate.productSize
        })
        .where('id', itemToUpdate.id)
        .returning('*')
        .then(items => response.json(items))

    // find in the cart table the item with id, color, size

    // if newQty == 0, delete that from the cart table

    // else update that row in the cart table with newQty
})

app.listen(4000, () => console.log(`CORS-enabled web server listening on ${port}`));
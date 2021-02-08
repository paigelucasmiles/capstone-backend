const express = require('express');
const app = express();
const port = 4000;

const config = require('../knexfile').development;
const knex = require('knex');
const database = knex(config);

const { Model } = require('objection');
Model.knex(database);



app.listen(4000, () => console.log(`listening on ${port}`));
const { Model } = require('objection');

class Product extends Model {
    static tableName = 'products';
}

module.exports = Product
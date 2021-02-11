const { Model } = require('objection');

class Cart extends Model {
    static tableName = 'cart';
}

module.exports = Cart
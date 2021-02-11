
exports.up = function(knex) {
    return knex.schema.createTable('cart', (table) => {
        table.increments()
        table.integer('productId')
        table.string('productColor')
        table.string('productSize')
        table.integer('productQuantity')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cart')
};

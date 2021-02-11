
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments()
        table.string('name')
        table.string('collection')
        table.text('description')
        table.string('image')
        table.integer('price')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products')
};
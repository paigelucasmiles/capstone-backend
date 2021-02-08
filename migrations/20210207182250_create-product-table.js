
exports.up = function(knex) {
    knex.schema.createTable('products', (table) => {
        table.increments()
        table.string('name')
        table.string('collection')
        table.string('image')
        table.integer('price')
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('products')
};
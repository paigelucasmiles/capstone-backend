
exports.up = function(knex) {
    knex.schema.createTable('product', (table) => {
        table.increments()
        table.string('name')
        table.string('collection')
        table.string('image')
        table.integer('price')
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('product')
};

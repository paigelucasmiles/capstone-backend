
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments()
      table.string("firstName")
      table.string("lastName")
      table.string("email")
      table.string("passwordHash")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('nga_whanau', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description', 1000)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nga_whanau')
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dreams', table => {
    table.increments('id').primary()
    table.integer('dreamer_id')
    table.integer('whanau_id')
    table.string('name')
    table.string('description', 1000)
    table.string('type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dreams')
};

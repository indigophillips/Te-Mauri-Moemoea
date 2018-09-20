exports.up = function(knex, Promise) {
  return knex.schema.createTable('dailys', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('wellness')
    table.date('gender')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dailys')
};

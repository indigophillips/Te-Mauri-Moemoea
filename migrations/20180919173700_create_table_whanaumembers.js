
exports.up = function(knex, Promise) {
  return knex.schema.createTable('whanaumembers', table => {
    table.increments('id').primary()
    table.integer('user_1_id')
    table.integer('user_2_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('whanaumembers')
};

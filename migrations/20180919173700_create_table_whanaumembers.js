
exports.up = function(knex, Promise) {
  return knex.schema.createTable('whanaumembers', table => {
    table.increments('id').primary()
    table.integer('whanau_id')
    table.integer('member_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('whanaumembers')
};

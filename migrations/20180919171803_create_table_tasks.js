exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.integer('dream_id')
    table.integer('actor_id')
    table.string('taha')
    table.string('name')
    table.string('description', 1000)
    table.boolean('done')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks')
};

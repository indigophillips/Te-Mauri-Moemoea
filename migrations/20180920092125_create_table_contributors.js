exports.up = function (knex, Promise) {
  return knex.schema.createTable('contributors', table => {
    table.increments('id').primary()
    table.integer('contributor_id')
    table.integer('dream_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contributors')
}

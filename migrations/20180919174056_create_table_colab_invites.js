exports.up = function (knex, Promise) {
  return knex.schema.createTable('colabinvites', table => {
    table.increments('id').primary()
    table.integer('sender_id')
    table.integer('receiver_id')
    table.string('type')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('colabinvites')
}

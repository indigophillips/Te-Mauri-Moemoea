exports.up = function (knex, Promise) {
  return knex.schema.createTable('friendshipinvites', table => {
    table.increments('id').primary()
    table.integer('sender_id')
    table.integer('receiver_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('friendshipinvites')
}

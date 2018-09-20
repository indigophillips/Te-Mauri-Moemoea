const {generate} = require('../server/auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([{
        first_name: 'Test',
        last_name: 'McTest',
        gender: 'M',
        age: 17,
        iwi: 'Ngati Porou',
        kaitiaki: 'Piwakawaka',
        phone_number: '1234567',
        hash: generate('password')
      }])
    })
}

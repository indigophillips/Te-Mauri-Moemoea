const {generate} = require('../server/auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Test',
          last_name: 'McTest',
          gender: 'M',
          age: 17,
          iwi: 'Ngati Porou',
          kaitiaki: 'Piwakawaka',
          phone_number: '1234567',
          hash: generate('password')
        },
        {
          id: 2,
          first_name: 'Toast',
          last_name: 'McTest',
          gender: 'M',
          age: 35,
          iwi: 'Ngati Porou',
          kaitiaki: 'Piwakawaka',
          phone_number: '12345678',
          hash: generate('password')
        },
        {
          id: 3,
          first_name: 'Spread',
          last_name: 'McTest',
          gender: 'F',
          age: 33,
          iwi: 'Ngati Porou',
          kaitiaki: 'Piwakawaka',
          phone_number: '123456789',
          hash: generate('password')
        },
        {
          id: 4,
          first_name: 'Check',
          last_name: 'McToast',
          gender: 'other',
          age: 48,
          iwi: 'Ngati Kahu',
          kaitiaki: 'Piwakawaka',
          phone_number: '1234567891',
          hash: generate('password')
        },
      ])
    })
}

const conn = require('./connection')

const hash = require('../auth/hash')

function getUserByID (id, testDB) {
  const db = testDB || conn

  return db('users')
    .where({id})
    .first()
}

function addUser (user, testDB) {
  const db = testDB || conn
  const passwordHash = hash.generate(user.password)

  const cleanUser = {
    first_name: user.firstName,
    last_name: user.lastName,
    gender: user.gender,
    age: user.age,
    iwi: user.iwi,
    kaitiaki: user.kaitiaki,
    phone_number: user.phoneNumber,
    hash: passwordHash
  }

  return db.insert([cleanUser], 'id').into('users')
}

function getUserByPhoneNumber (number, testDB) {
  const db = testDB || conn

  return db('users')
    .where({phone_number: number})
    .first()
}

function userExists (number, testDB) {
  const db = testDB || conn

  return getUserByPhoneNumber(number, db)
    .then(user => !!user)
}

module.exports = {
  getUserByID,
  addUser,
  getUserByPhoneNumber,
  userExists
}

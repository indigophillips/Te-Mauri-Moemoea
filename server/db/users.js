const conn = require('./connection')

function getUserByID ( id, testDB ) {
  const db = testDB || conn

  return db('users')
    .where( { id } )
    .first()
}

function addUser ( user, testDB ) {
  const db = testDB || conn

  return db.insert([user], 'id').into('users')
}

module.exports = {
  getUserByID,
  addUser
}
const conn = require('./connection')

function getUserByID ( id, testDB ) {
  const db = testDB || conn

  return db('users')
    .where( { id } )
    .first()
}

module.exports = {
  getUserByID
}
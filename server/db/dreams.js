const conn = require('./connection')

function getPublicDreams ( testDB ) {
  const db = testDB || conn

  return db('dreams')
    .where( { type: 'public' } )
}

function getPersonalDreamsByUserID ( dreamer_id, testDB ) {
  const db = testDB || conn

  return db('dreams')
    .where({dreamer_id})
    .whereNot({type: 'whanau'})
}

module.exports = {
  getPublicDreams,
  getPersonalDreamsByUserID
}
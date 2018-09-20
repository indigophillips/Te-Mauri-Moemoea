const conn = require('./connection')

function getPublicDreams ( testDB ) {
  const db = testDB || conn

  return db('dreams')
    .where( { type: 'public' } )
}

function getPersonalDreamsByUserID ( user_id, testDB ) {
  const db = testDB || conn

  return db('dreams')
    .where({dreamer_id: user_id})
    .whereNot({type: 'whanau'})
}

// function getDreamsByContributorID ( contributor_id, testDB ) {
//   const db = testDB || conn

//   return db('dreams')
//     .where({contributor_id})
//     .whereNot({type: 'whanau'})
// }

module.exports = {
  getPublicDreams,
  getPersonalDreamsByUserID
}
const conn = require('./connection')

function getPublicDreams ( testDB ) {
  const db = testDB || conn

  return db('dreams')
    .where( { type: 'public' } )
}

module.exports = {
  getPublicDreams
}
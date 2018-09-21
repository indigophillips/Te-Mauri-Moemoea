const conn = require('./connection')

function getTasksByDreamID (dreamID, testDB) {
  const db = testDB || conn

  return db('tasks')
    .select()
    .where('dream_id', dreamID)
}

module.exports = {
  getTasksByDreamID
}
module.exports = {
  getThings
}

function getThings () {
  const fruits = ['banana', 'table', 'tree']
  return Promise.resolve(fruits)
}

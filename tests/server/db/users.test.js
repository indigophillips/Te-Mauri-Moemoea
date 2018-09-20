
const users = require('../../../server/db/users')
const env = require('./test-environment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('user DB: ', () => {
  const fakeUser = {
    first_name: 'Stan',
    last_name: 'Roache'
  }

  it('addUser inserts user and gets id response', () => {
    return users.addUser(fakeUser, testDb)
      .then(ids => {
        const expected = 'number'
        const actual = typeof ids[0]
        expect(actual).toBe(expected)
      })
  })
})
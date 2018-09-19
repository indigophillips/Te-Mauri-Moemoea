import request from 'superagent'

const rootUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  const payloadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {Accept: 'application/json'}
  return request[method](rootUrl + endpoint)
    .set(headers)[payloadMethod](data)
    .then(res => res)
    .catch(err => {
      throw err
    })
}

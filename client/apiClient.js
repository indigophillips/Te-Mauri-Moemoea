import request from 'superagent'

const rootUrl = '/api/v1'

export function getThings () {
  return request.get(rootUrl + '/things')
    .then(res => {
      return res.body.fruits
    })
}

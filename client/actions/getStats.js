import request from 'superagent'
import {showError} from '.'

export const REQUEST_STATS = 'REQUEST_BALANCE_STATS'
export const RECEIVE_STATS = 'RECEIVE_BALANCE_STATS'

const requestStats = () => {
  return {
    type: REQUEST_STATS
  }
}

const receiveStats = (data) => {
  return {
    type: RECEIVE_STATS,
    payload: {
      data
    }
  }
}

export function getStats () {
  return dispatch => {
    dispatch(requestStats())
    return request
      .get('./api/v1/dummydata')
      .then(res => {
        dispatch(receiveStats(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

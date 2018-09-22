import request from 'superagent'
import {showError} from '../actions'

export const REQUEST_BALANCE_STATS = 'REQUEST_BALANCE_STATS'
export const RECEIVE_BALANCE_STATS = 'RECEIVE_BALANCE_STATS'

const requestBalanceStats = () => {
  return {
    type: REQUEST_BALANCE_STATS
  }
}

const receiveBalanceStats = (data) => {
  return {
    type: RECEIVE_BALANCE_STATS,
    payload: {
      data
    }
  }
}

export function getBalanceStats () {
  return dispatch => {
    dispatch(requestBalanceStats())
    return request
      .get('./api/v1/dummydata')
      .then(res => {
        dispatch(receiveBalanceStats(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

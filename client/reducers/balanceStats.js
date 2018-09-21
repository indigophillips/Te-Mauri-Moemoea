import request from 'superagent'
import {showError} from '../actions/getBalanceStats'

export const REQUEST_BALANCE_STATS = 'REQUEST_BALANCE_STATS'
export const RECEIVE_BALANCE_STATS = 'RECEIVE_BALANCE_STATS'

const requestBalanceStats = () => {
  return {
    type: REQUEST_BALANCE_STATS
  }
}

const receiveBalanceStats = (stats) => {
  return {
    type: RECEIVE_BALANCE_STATS,
    stats
  }
}

export function getBalanceStats () {
  return dispatch => {
    dispatch(requestBalanceStats())
    return request
      .get('/')
      .then(res => {
        return getBalanceStats(res.body)
      })
      .then(stats => {
        dispatch(receiveBalanceStats(stats))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

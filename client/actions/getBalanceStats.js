import {REQUEST_BALANCE_STATS, RECEIVE_BALANCE_STATS} from '../reducers/balanceStats'

const getBalanceStats = (state = null, action) => {
  switch (action.type) {
    case REQUEST_BALANCE_STATS:
      return null

    case RECEIVE_BALANCE_STATS:
      return action.balanceStats

    default:
      return state
  }
}

export default getBalanceStats

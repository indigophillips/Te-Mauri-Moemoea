import {REQUEST_BALANCE_STATS, RECEIVE_BALANCE_STATS} from '../actions/getBalanceStats'

const balanceStats = (state = null, action) => {
  switch (action.type) {
    case REQUEST_BALANCE_STATS:
      return null

    case RECEIVE_BALANCE_STATS:
      return action.payload.data

    default:
      return state
  }
}

export default balanceStats

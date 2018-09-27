import {REQUEST_STATS, RECEIVE_STATS} from '../actions/getStats'

const stats = (state = null, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return null

    case RECEIVE_STATS:
      return action.payload.data

    default:
      return state
  }
}

export default stats

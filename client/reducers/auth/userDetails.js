import {
  LOG_OUT
} from '../../actions/auth/login'

import {
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../../actions/auth/register'

import {user} from '../../lib/sampleData'

const userDetails = (state = user, action) => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      return null

    case RECEIVE_USER_DETAILS:
      return action.user

    case LOG_OUT:
      return null

    default:
      return state
  }
}

export default userDetails

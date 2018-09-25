import {combineReducers} from 'redux'

import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'
import errorMessage from './errorMessage'
import stats from './stats'
import dreams from './dreams'
import whanau from './whanau'
import newDream from './newDream'

export default combineReducers({
  register,
  login,
  userDetails,
  errorMessage,
  stats,
  dreams,
  newDream,
  whanau
})

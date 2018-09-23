import {combineReducers} from 'redux'

import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'
import errorMessage from './errorMessage'
import stats from '../reducers/stats'

export default combineReducers({
  register,
  login,
  userDetails,
  errorMessage,
  stats
})

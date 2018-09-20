import {combineReducers} from 'redux'

import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'

export default combineReducers({
  register,
  login,
  userDetails
})

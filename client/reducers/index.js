import {combineReducers} from 'redux'

import register from './auth/register'
import userDetails from './auth/userDetails'

export default combineReducers({
  register,
  userDetails
})

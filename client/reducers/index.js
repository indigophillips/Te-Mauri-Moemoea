import {combineReducers} from 'redux'

import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'
import errorMessage from './errorMessage'
import user from './user'
import dreams from './dreamReducer'

export default combineReducers({
  register,
  login,
  userDetails,
  errorMessage,
  user,
  dreams
})

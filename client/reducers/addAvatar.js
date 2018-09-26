import {ADD_AVATAR, GET_AVATAR} from '../actions/selectAvatar'

const avatar = (state = 'images/avatar1.png', action) => {
  switch (action.type) {
    case ADD_AVATAR:
    return true

    case GET_AVATAR:
    return true

    default:
    return state
  }
}
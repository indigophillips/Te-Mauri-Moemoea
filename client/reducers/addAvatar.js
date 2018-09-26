import {ADD_AVATAR, GET_AVATAR} from '../actions/selectAvatar'

const avatar = (state = 'images/avatar1.png', action) => {
  switch (action.type) {
    case ADD_AVATAR:
    return action.payload

    case GET_AVATAR:
    return state

    default:
    return state
  }
}

export default avatar
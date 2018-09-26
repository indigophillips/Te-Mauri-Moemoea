export const ADD_AVATAR = 'ADD_AVATAR'

export function addAvatar (payload) {
  return {
    type: ADD_AVATAR,
    payload
  }
}

export function getAvatar (payload) {
  return {
    type: GET_AVATAR,
    payload
  }
}

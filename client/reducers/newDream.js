import {UPDATE_NEW_DREAM, WIPE_NEW_DREAM, ADD_TASK} from '../actions/newDream'

export const freshDream = {
  name: '',
  description: '',
  tasks: []
}

export default function newDreamReducer (state = freshDream, action) {
  switch (action.type) {
    case UPDATE_NEW_DREAM:
      return Object.assign(
        {},
        state,
        action.payload
      )
    case WIPE_NEW_DREAM:
      return freshDream
    case ADD_TASK:
      const newState = Object.assign(
        {},
        state,
        {tasks: [...state.tasks, action.payload]}
      )
      return newState
    default:
      return state
  }
}
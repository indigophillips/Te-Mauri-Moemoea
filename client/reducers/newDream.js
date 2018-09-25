import {UPDATE_NEW_DREAM, WIPE_NEW_DREAM, ADD_TASK} from '../actions/newDream'

export const freshDream = {
  name: '',
  description: '',
  tasks: [
    {
      name: 'Ask mum/dad for my ID',
      description: 'Find my passport or birth certificate to show before the test',
      taha: 'whānau',
      done: true,
      due_date: 'none'
    },
    {
      name: 'Eat dinner together',
      taha: 'whānau'
    }
  ]
}

export default function newDreamReducer (state = null, action) {
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
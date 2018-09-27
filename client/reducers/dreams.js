import {SELECT_DREAM} from '../actions/selectDream'
import {ADD_NEW_DREAM} from '../actions/newDream'

import {
  personalDreams,
  whanauDreams,
  contributorDreams,
  publicDreams
} from '../lib/sampleData'

const sampleDreams = {
  personal: personalDreams,
  whanau: whanauDreams,
  contributing: contributorDreams,
  public: publicDreams,
  selection: {
    type: 'personal',
    id: 1
  }
}

export default function dreamReducer (state = sampleDreams, action) {
  switch (action.type) {
    case SELECT_DREAM:
      return Object.assign(
        {},
        state,
        {
          selection: {
            type: action.payload.dreamType,
            id: action.payload.dreamID
          }
        }
      )
    case ADD_NEW_DREAM:
      return Object.assign(
        {},
        state,
        {
          [action.payload.scope]: 
            [...state[action.payload.scope], action.payload],
          selection: {
            type: action.payload.scope,
            id: action.payload.id
          }
        }
      )
    default:
      return state
  }
}

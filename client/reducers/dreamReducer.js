import {REQUEST_FETCH_DREAMS, SUCCESS_FETCH_DREAMS, ERROR_FETCH_DREAMS} from '../actions/constants'

export const initialState = {
  isFetching: false,
  personal: [],
  collaborator: [],
  contributor: [],
  public: []
}

function dreamReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_FETCH_DREAMS:
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS_FETCH_DREAMS:
      return {
        ...state,
        isFetching: false,
        [action.payload.dreamType]: action.payload.dreams
      }
    default:
      return state
  }
}

export default userReducer
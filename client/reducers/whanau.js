import {
  whanau,
  whanau_members
} from '../lib/sampleData'

const sampleWhanau = {
  whanau,
  members: whanau_members
}

export default function whanauReducer (state = sampleWhanau, action) {
  switch (action.type) {
    default:
      return state
  }
}
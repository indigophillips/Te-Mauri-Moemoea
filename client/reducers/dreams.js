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
    default:
      return state
  }
}
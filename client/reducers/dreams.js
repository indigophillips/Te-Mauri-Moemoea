import {
  personalDreams, 
  whanauDreams, 
  contributorDreams, 
  publicDreams
} from './dreams'

const sampleDreams = {
  personal: personalDreams,
  whanau: whanauDreams,
  contributing: contributorDreams,
  public: publicDreams
}

export default function dreamReducer (state = sampleDreams, action) {
  switch (action.type) {
    default:
      return state
  }
}
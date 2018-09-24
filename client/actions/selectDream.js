export const SELECT_DREAM = 'SELECT_DREAM'

export function selectDream (dreamType, dreamID) {
  return {
    type: SELECT_DREAM,
    payload: {
      dreamType,
      dreamID
    }
  }
}
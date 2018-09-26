export const UPDATE_NEW_DREAM = 'UPDATE_NEW_DREAM'
export const WIPE_NEW_DREAM = 'WIPE_NEW_DREAM'
export const ADD_TASK = 'ADD_TASK'

export function editNewDream (payload) {
  return {
    type: UPDATE_NEW_DREAM,
    payload
  }
}

export function addTaskToDream (task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function wipeNewDream () {
  return {
    type: WIPE_NEW_DREAM
  }
}

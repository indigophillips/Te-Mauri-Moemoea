export const UPDATE_NEW_DREAM = 'UPDATE_NEW_DREAM'
export const WIPE_NEW_DREAM = 'WIPE_NEW_DREAM'
export const ADD_TASK = 'ADD_TASK'
export const ADD_NEW_DREAM = 'ADD_NEW_DREAM'

export function editNewDream (task) {
  return {
    type: UPDATE_NEW_DREAM,
    payload: task
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

export function addNewDream (dream) {
  return {
    type: ADD_NEW_DREAM,
    payload: dream
  }
}

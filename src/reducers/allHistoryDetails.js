import { LIST_ALL_HISTORY } from '../actions/actionTypes'

function allHistoryDetails(state = [], action) {
  switch (action.type) {
    case LIST_ALL_HISTORY:
      return (state = action.value)
    default:
      return state
  }
}

export default allHistoryDetails

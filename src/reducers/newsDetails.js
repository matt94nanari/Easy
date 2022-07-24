import { LIST_NEWS } from '../actions/actionTypes'

function newsDetails(state = [], action) {
  switch (action.type) {
    case LIST_NEWS:
      return (state = action.value)
    default:
      return state
  }
}

export default newsDetails

import { LIST_ALL_NEWS } from '../actions/actionTypes'

function allNewsDetails(state = [], action) {
  switch (action.type) {
    case LIST_ALL_NEWS:
      return (state = action.value)
    default:
      return state
  }
}

export default allNewsDetails

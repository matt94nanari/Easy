import { LIST_TECHNICAL_CORNER } from '../actions/actionTypes'

function technicalCornerDetails(state = [], action) {
  switch (action.type) {
    case LIST_TECHNICAL_CORNER:
      return (state = action.value)
    default:
      return state
  }
}

export default technicalCornerDetails

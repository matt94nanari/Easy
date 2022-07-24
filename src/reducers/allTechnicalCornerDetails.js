import { LIST_ALL_TECHNICAL_CORNER } from '../actions/actionTypes'

function allTechnicalCornerDetails(state = [], action) {
  switch (action.type) {
    case LIST_ALL_TECHNICAL_CORNER:
      return (state = action.value)
    default:
      return state
  }
}

export default allTechnicalCornerDetails

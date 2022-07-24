import { LIST_ALL_EMPLOYEEGARDEN } from '../actions/actionTypes'

function allEmployeeGardenDetails(state = [], action) {
  switch (action.type) {
    case LIST_ALL_EMPLOYEEGARDEN:
      return (state = action.value)
    default:
      return state
  }
}

export default allEmployeeGardenDetails

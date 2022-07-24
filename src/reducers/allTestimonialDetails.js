import { LIST_ALL_TESTIMONIAL } from '../actions/actionTypes'

function allTestimonialDetails(state = [], action) {
  switch (action.type) {
    case LIST_ALL_TESTIMONIAL:
      return (state = action.value)
    default:
      return state
  }
}

export default allTestimonialDetails

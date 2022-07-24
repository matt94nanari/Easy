import newsDetails from './newsDetails'
import allNewsDetails from './allNewsDetails'
import technicalCornerDetails from './technicalCornerDetails'
import allTechnicalCornerDetails from './allTechnicalCornerDetails'
import allHistoryDetails from './allHistoryDetails'
import allTestimonialDetails from './allTestimonialDetails'
import allEmployeeGardenDetails from './allEmployeeGardenDetails'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  newsDetails,
  allNewsDetails,
  allHistoryDetails,
  technicalCornerDetails,
  allTechnicalCornerDetails,
  allTestimonialDetails,
  allEmployeeGardenDetails,
})

export { rootReducer }

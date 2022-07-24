import {
  LIST_NEWS,
  LIST_ALL_NEWS,
  LIST_TECHNICAL_CORNER,
  LIST_ALL_TECHNICAL_CORNER,
  LIST_ALL_HISTORY,
  LIST_ALL_TESTIMONIAL,
  LIST_ALL_EMPLOYEEGARDEN,
} from './actionTypes'

export const ListNewsDetails = (value) => {
  return {
    type: LIST_NEWS,
    value,
  }
}
export const ListNewsDetailsAsync = (newData) => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/news/getDetails'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    if (data.results.length > 0) {
      dispatch(ListNewsDetails(data.results))
    }
  }
}
export const ListAllNewsDetails = (value) => {
  return {
    type: LIST_ALL_NEWS,
    value,
  }
}
export const ListAllNewsDetailsAsync = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/news/getAllDetails'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    if (data.success) {
      dispatch(ListAllNewsDetails(data.results))
    }
    return data.success
  }
}
export const ListTechnicalCornerDetails = (value) => {
  return {
    type: LIST_TECHNICAL_CORNER,
    value,
  }
}
export const ListTechnicalCornerDetailsAsync = (newData) => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/technicalCorner/getDetails'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    if (data.results.length > 0) {
      dispatch(ListTechnicalCornerDetails(data.results))
    }
  }
}
export const ListAllTechnicalCornerDetails = (value) => {
  return {
    type: LIST_ALL_TECHNICAL_CORNER,
    value,
  }
}
export const ListAllTechnicalCornerDetailsAsync = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/technicalCorner/getAllDetails'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    if (data.success) {
      dispatch(ListAllTechnicalCornerDetails(data.results))
    }
    return data.success
  }
}
export const ListAllHistoryDetails = (value) => {
  return {
    type: LIST_ALL_HISTORY,
    value,
  }
}
export const ListAllHistoryDetailsAsync = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/history/getAllDetails'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    if (data.success) {
      dispatch(ListAllHistoryDetails(data.results))
    }
    return data.success
  }
}
export const ListAllTestimonialDetails = (value) => {
  return {
    type: LIST_ALL_TESTIMONIAL,
    value,
  }
}
export const ListAllTestimonialDetailsAsync = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/testimonial/getAllDetails'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    if (data.success) {
      dispatch(ListAllTestimonialDetails(data.results))
    }
    return data.success
  }
}
export const ListAllEmployeeGardenDetails = (value) => {
  return {
    type: LIST_ALL_EMPLOYEEGARDEN,
    value,
  }
}
export const ListAllEmployeeGardenDetailsAsync = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/employeeGarden/getAllDetails'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    if (data.success) {
      dispatch(ListAllEmployeeGardenDetails(data.results))
    }
    return data.success
  }
}

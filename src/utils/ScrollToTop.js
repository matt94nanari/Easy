import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const ScrollToTop = ({
  children,
  location,
  setShowLoader,
  showLoader,
  hashID,
}) => {
  useEffect(() => {
    setShowLoader(true)
  }, [location.pathname, setShowLoader])
  useEffect(() => {
    if (showLoader === false) {
      if (hashID) {
        let elem = document.getElementById(hashID)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    }
  }, [hashID, showLoader])

  return children || null
}

export default withRouter(ScrollToTop)

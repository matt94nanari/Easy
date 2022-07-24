import React, { useState, useEffect } from 'react'
import { BsChevronUp } from 'react-icons/bs'
var Scroll = require('react-scroll')
var scroll = Scroll.animateScroll

function BackToTop() {
  const [showBackButton, setShowBackButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleBackButton)
    return () => {
      window.removeEventListener('scroll', handleBackButton)
    }
  }, [])

  const handleBackButton = () => {
    let offset = 100
    if (window.pageYOffset > offset) {
      setShowBackButton(true)
    } else {
      setShowBackButton(false)
    }
  }

  return (
    <div id="back" className={showBackButton ? 'show' : 'fade'}>
      <BsChevronUp
        id="backButton"
        onClick={() => {
          scroll.scrollToTop()
        }}
      />
    </div>
  )
}

export default BackToTop

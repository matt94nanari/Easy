import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
const ReadMore = ({ children }) => {
  const { t } = useTranslation()
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <>
      <ul className="readMore">
        {isReadMore ? (
          <>
            <li className="half-text">{text[0]}</li>
            <li className="half-text">{text[1]}</li>
          </>
        ) : (
          text.map((v, i) => (
            <li key={i} className="full-text">
              {v}
            </li>
          ))
        )}
      </ul>
      <div className="mt-3 readMore-button">
        <button
          onClick={toggleReadMore}
          className={isReadMore ? 'less' : 'more'}
          type="button"
        >
          <span>{isReadMore ? t('ReadMore') : t('ShowLess')}</span>
        </button>
      </div>
    </>
  )
}

export default ReadMore

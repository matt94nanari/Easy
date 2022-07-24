import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
export default function PrivacyButton() {
  const { t } = useTranslation()
  const [userAllow, setUserAllow] = useState(Cookies.get('userAllowCookie'))
  useEffect(() => {
    if (userAllow !== undefined) {
      if (userAllow === 'y') {
        ref.current.classList.add('hide')
      } else {
        ref.current.classList.remove('hide')
      }
    }
  }, [userAllow])
  const ref = useRef(null)
  const userAgree = () => {
    Cookies.set('userAllowCookie', 'y', { expires: 7 })
    ref.current.classList.add('hide')
  }
  return (
    <div className="privacy-button" ref={ref}>
      <p>
        {t('PrivacyPolicyButton.Content1')}
        <Link to="/privacy-policy">{t('PrivacyPolicyButton.Content2')}</Link>
        {t('PrivacyPolicyButton.Content3')}
      </p>
      <button type="button" onClick={userAgree}>
        {t('PrivacyPolicyButton.Agree')}
      </button>
    </div>
  )
}

import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

function PageNotFound(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('404.title')} | {t('Home.HTMLTitle')}
        </title>
      </Helmet>
      <section className="pageNotFound">
        <div className="d-flex flex-column align-items-center">
          <div>
            <h1>ERROR 404</h1>
          </div>
          <div>
            <h3>{t('404.content')}</h3>
          </div>
          <div>
            <button
              className="btn my-3"
              onClick={() => {
                props.history.push('/')
              }}
            >
              {t('404.homePage')}
            </button>
          </div>
          <br />
        </div>
      </section>
    </>
  )
}

export default withRouter(PageNotFound)

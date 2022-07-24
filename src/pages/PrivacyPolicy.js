import BannerButton from '../components/BannerButton'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Container } from 'react-bootstrap'
function PrivacyPolicy() {
  const { t } = useTranslation()
  return (
    <main>
      <Helmet>
        <title>
          {t('PrivacyPolicy.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('PrivacyPolicy.Title')} />
      </Helmet>
      <section className="privacyPolicy">
        <BannerButton color={`darkGreen`} location={`left`}>
          {t('PrivacyPolicy.Title')}
        </BannerButton>
        <Container>
          <div className="textArea">
            <p className="title col-12">
              {t('PrivacyPolicy.Content').split('-')[0]}
              <br />
              {t('PrivacyPolicy.Content').split('-')[1]}
              <br />
              {t('PrivacyPolicy.Content').split('-')[2]}
            </p>
            <ol className="content">
              <li>
                {t('PrivacyPolicy.Content2').split('-')[0]}
                <br />
                <ul className="description">
                  <li>
                    <span className="bold">
                      {t('PrivacyPolicy.Content2').split('-')[1]}
                    </span>
                    <p>{t('PrivacyPolicy.Content2').split('-')[2]}</p>
                  </li>
                  <li>
                    <span className="bold">
                      {t('PrivacyPolicy.Content2').split('-')[3]}
                    </span>
                    <p>{t('PrivacyPolicy.Content2').split('-')[4]}</p>
                  </li>
                </ul>
              </li>
              <li>
                {t('PrivacyPolicy.Content3').split('-')[0]}
                <ul className="description">
                  <li>
                    <span className="bold">
                      {t('PrivacyPolicy.Content3').split('-')[1]}
                    </span>
                    <ul>
                      <li>{t('PrivacyPolicy.Content3').split('-')[2]}</li>
                      <li>{t('PrivacyPolicy.Content3').split('-')[3]}</li>
                      <li>{t('PrivacyPolicy.Content3').split('-')[4]}</li>
                    </ul>
                  </li>
                  <li>
                    <span className="bold">
                      {t('PrivacyPolicy.Content4').split('-')[0]}
                    </span>
                    <ul>
                      <li>{t('PrivacyPolicy.Content4').split('-')[1]}</li>
                    </ul>
                  </li>
                  <li>
                    <span className="bold">
                      {t('PrivacyPolicy.Content5').split('-')[0]}
                    </span>
                    <br />
                    {t('PrivacyPolicy.Content5') ? (
                      <>
                        <p>{t('PrivacyPolicy.Content5').split('-')[1]}</p>
                        <ul>
                          <li>{t('PrivacyPolicy.Content5').split('-')[2]}</li>
                          <li>{t('PrivacyPolicy.Content5').split('-')[3]}</li>
                          <li>{t('PrivacyPolicy.Content5').split('-')[4]}</li>
                        </ul>
                      </>
                    ) : (
                      <></>
                    )}
                  </li>
                  {t('PrivacyPolicy.Content6') ? (
                    <li>
                      <span className="bold">
                        {t('PrivacyPolicy.Content6').split('-')[0]}
                      </span>
                      <ul>
                        <li>{t('PrivacyPolicy.Content6').split('-')[1]}</li>
                        <li>{t('PrivacyPolicy.Content6').split('-')[2]}</li>
                        <li>{t('PrivacyPolicy.Content6').split('-')[3]}</li>
                      </ul>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </li>
              <li>
                {t('PrivacyPolicy.Content7').split('-')[0]}
                <ul className="description">
                  <li>{t('PrivacyPolicy.Content7').split('-')[1]}</li>
                  <li>{t('PrivacyPolicy.Content7').split('-')[2]}</li>
                </ul>
              </li>
              <li>
                {t('PrivacyPolicy.Content8').split('-')[0]}
                <ul className="description">
                  <li>{t('PrivacyPolicy.Content8').split('-')[1]}</li>
                </ul>
              </li>
              <li>
                {t('PrivacyPolicy.Content9').split('-')[0]}
                <ul className="description">
                  <li>{t('PrivacyPolicy.Content9').split('-')[1]}</li>
                  <li>
                    <ul>
                      <li>{t('PrivacyPolicy.Content9').split('-')[2]}</li>
                      <li>{t('PrivacyPolicy.Content9').split('-')[3]}</li>
                      <li>{t('PrivacyPolicy.Content9').split('-')[4]}</li>
                      <li>{t('PrivacyPolicy.Content9').split('-')[5]}</li>
                      <li>{t('PrivacyPolicy.Content9').split('-')[6]}</li>
                      <li>{t('PrivacyPolicy.Content9').split('-')[7]}</li>
                      <li>{t('PrivacyPolicy.Content9').split('-')[8]}</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                {t('PrivacyPolicy.Content10').split('-')[0]}
                <ul className="description">
                  <li>{t('PrivacyPolicy.Content10').split('-')[1]}</li>
                </ul>
              </li>
              <li>
                {t('PrivacyPolicy.Content11').split('-')[0]}
                <ul className="description">
                  <li>{t('PrivacyPolicy.Content11').split('-')[1]}</li>
                </ul>
              </li>
            </ol>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default PrivacyPolicy

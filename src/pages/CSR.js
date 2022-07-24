import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import ImageLoader from '../components/ImageLoader'
import hospital from '../images/CSR/VeteransGeneralhospital2017.webp'
import hospital2 from '../images/CSR/VeteransGeneralhospital2020.webp'
import placeholder from '../images/other/placeholder2.webp'
const Section1 = (props) => {
  const { t } = props
  const imgAry = [hospital, hospital2]
  return (
    <section className="csrSection1">
      <BannerButton color={`darkGreen`}>{t('CSR.Title')}</BannerButton>
      <div className="photo d-flex flex-wrap justify-content-center">
        {imgAry.map((v, i) => (
          <Card className="col-lg-3 col-md-4 col-sm-6 col-7 my-3 mx-5" key={i}>
            <ImageLoader
              src={v}
              alt={`pic${i + 1}`}
              placeholder={placeholder}
              className={`card-img-top`}
            />
          </Card>
        ))}
      </div>
    </section>
  )
}

function CSR(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <meta property="og:title" content={t('CSR.Title')} />
        <title>
          {t('CSR.Title')}| {t('Home.HTMLTitle')}
        </title>
      </Helmet>
      <main>
        <Section1 t={t} />
      </main>
    </>
  )
}

export default withRouter(CSR)

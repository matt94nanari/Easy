import React, { useEffect } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Carousel, Card } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import ImageLoader from '../components/ImageLoader'
import electronicsDM from '../images/product/electronicsDM.webp'
import electronicsDMPlaceholder from '../images/product/electronicsDM-placeholder.webp'
import electronicsScrews from '../images/product/electronicsScrews.webp'
import electronicsScrewsPlaceholder from '../images/product/electronicsScrews-placeholder.webp'
import electronicsScrews2 from '../images/product/electronicsScrews2.webp'
import electronicsScrews2Placeholder from '../images/product/electronicsScrews2-placeholder.webp'
import electronicsScrews3 from '../images/product/electronicsScrews3.webp'
import electronicsScrews3Placeholder from '../images/product/electronicsScrews3-placeholder.webp'
import furnitureDM from '../images/product/furnitureDM.webp'
import furnitureDMPlaceholder from '../images/product/furnitureDM-placeholder.webp'
import furnitureScrews from '../images/product/furnitureScrew.webp'
import furnitureScrewsPlaceholder from '../images/product/furnitureScrew-placeholder.webp'
import pressingDM from '../images/product/pressingDM2.webp'
import pressingDMPlaceholder from '../images/product/pressingDM-placeholder.webp'
import pressingParts from '../images/product/pressingParts.webp'
import pressingPartsPlaceholder from '../images/product/pressingParts-placeholder.webp'
import specialNuts from '../images/product/specialNuts.webp'
import specialNutsPlaceholder from '../images/product/specialNuts-placeholder.webp'
import specialNuts2 from '../images/product/specialNuts2.webp'
import specialNuts2Placeholder from '../images/product/specialNuts2-placeholder.webp'
import specialNuts3 from '../images/product/specialNuts3.webp'
import specialNuts3Placeholder from '../images/product/specialNuts3-placeholder.webp'
import specialNuts4 from '../images/product/specialNuts4.webp'
import specialNuts4Placeholder from '../images/product/specialNuts4-placeholder.webp'
import autoPartsDM from '../images/product/autoPartsDM.webp'
import autoPartsDMPlaceholder from '../images/product/autoPartsDM-placeholder.webp'
import autoParts from '../images/product/autoParts.webp'
import autoPartsPlaceholder from '../images/product/autoParts-placeholder.webp'
import autoParts2 from '../images/product/autoParts2.webp'
import autoParts2Placeholder from '../images/product/autoParts2-placeholder.webp'
import autoParts3 from '../images/product/autoParts3.webp'
import autoParts3Placeholder from '../images/product/autoParts3-placeholder.webp'
import autoParts4 from '../images/product/autoParts4.webp'
import autoParts4Placeholder from '../images/product/autoParts4-placeholder.webp'
import autoParts5 from '../images/product/autoParts5.webp'
import autoParts5Placeholder from '../images/product/autoParts5-placeholder.webp'
const Section1 = (props) => {
  const { t } = props
  const imgAry = [autoParts, autoParts2, autoParts3, autoParts4, autoParts5]
  const placeholderAry = [
    autoPartsPlaceholder,
    autoParts2Placeholder,
    autoParts3Placeholder,
    autoParts4Placeholder,
    autoParts5Placeholder,
  ]
  return (
    <section
      className="productsSection1 d-flex justify-content-between flex-wrap"
      id="AutoParts"
      name="AutoParts"
    >
      <BannerButton color={`darkGreen`} location={'left'}>
        {t('Products.Title')}
      </BannerButton>
      <div className="textArea-desk col-lg-6">
        <div className="title">
          <h4>{t('Products.AutoParts.Title')}</h4>
        </div>
        <div className="photo col-12 mx-auto">
          <ImageLoader
            src={autoPartsDM}
            alt={`autoMobile`}
            placeholder={autoPartsDMPlaceholder}
          />
        </div>
        <div className="description col-xl-10 col-lg-10 col-12 mx-auto">
          <p>
            {t('Products.AutoParts.Content').split('-')[0]}
            <span className="lightGreen">
              {t('Products.AutoParts.Content').split('-')[1]}
            </span>
          </p>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 me-5 carousel-desk">
        <Carousel interval={5000} fade variant="dark">
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card>
                <ImageLoader
                  src={v}
                  alt={`autoParts${i + 1}`}
                  placeholder={placeholderAry[i]}
                  className={`card-img-top`}
                />
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="col-md-8 col-sm-10 col-12 carousel-mobile mx-auto d-none">
        <Carousel variant="dark" interval={5000} fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card>
                <ImageLoader
                  src={v}
                  alt={`autoParts${i + 1}`}
                  placeholder={placeholderAry[i]}
                  className={`card-img-top`}
                />
                <Card.Body>
                  <Card.Title>{t('Products.AutoParts.Title')}</Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { t } = props
  const imgAry = [electronicsScrews, electronicsScrews2, electronicsScrews3]
  const placeholderAry = [
    electronicsScrewsPlaceholder,
    electronicsScrews2Placeholder,
    electronicsScrews3Placeholder,
  ]
  return (
    <section
      className="productsSection2 d-flex justify-content-between flex-wrap"
      id="Electronics&ApplianceScrews"
      name="Electronics&ApplianceScrews"
    >
      <div className="col-lg-4 ms-5 carousel-desk" data-aos="fade-right">
        <Carousel interval={5000} fade variant="dark">
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card>
                <ImageLoader
                  src={v}
                  alt={`electronicsScrews${i + 1}`}
                  placeholder={placeholderAry[i]}
                  className={`card-img-top`}
                />
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="textArea-desk col-lg-6" data-aos="fade-left">
        <div className="title">
          <h4>{t('Products.Electronics&ApplianceScrews.Title')}</h4>
        </div>
        <div className="photo d-flex justify-content-center">
          <ImageLoader
            src={electronicsDM}
            alt={`electronicsDM`}
            placeholder={electronicsDMPlaceholder}
          />
        </div>
      </div>
      <div
        className="col-md-8 col-sm-10 col-12 carousel-mobile mx-auto d-none"
        data-aos="zoom-in"
      >
        <Carousel variant="dark" interval={5000} fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card>
                <ImageLoader
                  src={v}
                  alt={`electronicsScrews${i + 1}`}
                  placeholder={placeholderAry[i]}
                  className={`card-img-top`}
                />
                <Card.Body>
                  <Card.Title>
                    {t('Products.Electronics&ApplianceScrews.Title')}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
const Section3 = (props) => {
  const { t } = props
  const imgAry = [
    pressingParts,
    specialNuts,
    specialNuts2,
    specialNuts3,
    specialNuts4,
  ]
  const placeholderAry = [
    pressingPartsPlaceholder,
    specialNutsPlaceholder,
    specialNuts2Placeholder,
    specialNuts3Placeholder,
    specialNuts4Placeholder,
  ]
  return (
    <section
      className="productsSection3 d-flex justify-content-between flex-wrap"
      id="StampingParts&SpecialNuts"
      name="StampingParts&SpecialNuts"
    >
      <div className="textArea-desk col-lg-6" data-aos="fade-right">
        <div className="title">
          <h4>{t('Products.PressingParts&SpecialNuts.Title')}</h4>
        </div>
        <div className="d-flex photo justify-content-center">
          <ImageLoader
            src={pressingDM}
            alt={`pressingDM`}
            placeholder={pressingDMPlaceholder}
          />
        </div>
      </div>
      <div className="col-lg-4 me-4 carousel-desk" data-aos="fade-left">
        <Carousel interval={5000} variant="dark" fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card>
                <ImageLoader
                  src={v}
                  alt={`pressing${i + 1}`}
                  placeholder={placeholderAry[i]}
                  className={`card-img-top`}
                />
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div
        className="col-md-8 col-sm-10 col-12 carousel-mobile mx-auto d-none"
        data-aos="zoom-in"
      >
        <Carousel variant="dark" interval={5000} fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card>
                <ImageLoader
                  src={v}
                  alt={`pressing${i + 1}`}
                  placeholder={placeholderAry[i]}
                  className={`card-img-top`}
                />
                <Card.Body>
                  <Card.Title>
                    {t('Products.PressingParts&SpecialNuts.Title')}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
const Section4 = (props) => {
  const { t } = props
  return (
    <section
      className="productsSection4 d-flex justify-content-between flex-wrap"
      id="FurnitureScrews"
      name="FurnitureScrews"
    >
      <div className="col-lg-4 ms-5 carousel-desk" data-aos="fade-right">
        <Carousel
          interval={null}
          variant="dark"
          fade
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <Card>
              <ImageLoader
                src={furnitureScrews}
                alt="furnitureScrews"
                placeholder={furnitureScrewsPlaceholder}
                className={`card-img-top`}
              />
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="textArea-desk col-lg-7" data-aos="fade-left">
        <div className="title">
          <p>{t('Products.FurnitureScrews.Content')}</p>
          <h4>{t('Products.FurnitureScrews.Title')}</h4>
        </div>
        <div className="d-flex photo justify-content-center">
          <ImageLoader
            src={furnitureDM}
            alt={`furnitureDM`}
            placeholder={furnitureDMPlaceholder}
          />
        </div>
      </div>
      <div
        className="col-md-8 col-sm-10 col-12 carousel-mobile mx-auto d-none"
        data-aos="zoom-in"
      >
        <Carousel
          variant="dark"
          interval={null}
          fade
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <Card>
              <ImageLoader
                src={furnitureScrews}
                alt="furnitureScrews"
                placeholder={furnitureScrewsPlaceholder}
                className={`card-img-top`}
              />
              <Card.Body>
                <Card.Title>{t('Products.FurnitureScrews.Title')}</Card.Title>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}
function Products(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.Products.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('HeaderNavbar.Products.Title')} />
      </Helmet>
      <main>
        <Section1 t={t} />
        <Section2 t={t} />
        <Section3 t={t} />
        <Section4 t={t} />
      </main>
    </>
  )
}

export default withRouter(Products)

import { useEffect, useState, useRef } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import Title from '../components/Title'
import { Carousel } from 'react-bootstrap'
import DragCarousel from '../components/DragCarousel'
import ImageLoader from '../components/ImageLoader'
import BackgroundImageLoader from '../components/BackgroundImageLoader'
import TQS from '../images/aboutEasy/TQS.webp'
import IATF16949 from '../images/aboutEasy/IATF16949.webp'
import IATF169492 from '../images/aboutEasy/IATF169492.webp'
import ISO14001 from '../images/aboutEasy/ISO14001.webp'
import ISO140012 from '../images/aboutEasy/ISO14001-2.webp'
import news1 from '../images/aboutEasy/news1.webp'
import news2 from '../images/aboutEasy/news2.webp'
import news3 from '../images/aboutEasy/news3.webp'
import news4 from '../images/aboutEasy/news4.webp'
import news5 from '../images/aboutEasy/news5.webp'
import technicalCorner1 from '../images/aboutEasy/technicalCorner1.webp'
import technicalCorner2 from '../images/aboutEasy/technicalCorner2.webp'
import technicalCorner3 from '../images/aboutEasy/technicalCorner3.webp'
import technicalCorner4 from '../images/aboutEasy/technicalCorner4.webp'
import technicalCorner5 from '../images/aboutEasy/technicalCorner5.webp'
import technicalCorner6 from '../images/aboutEasy/technicalCorner6.webp'
import technicalCorner7 from '../images/aboutEasy/technicalCorner7.webp'
import tqs from '../files/Certificate/TQS.pdf'
import iso14001 from '../files/Certificate/ISO14001.pdf'
import iatf16949 from '../files/Certificate/IATF16949.pdf'
import worldMap from '../images/aboutEasy/worldMap.webp'
import worldMapPlaceholder from '../images/aboutEasy/worldMap-placeholder.webp'
import placeholder from '../images/other/placeholder.webp'
import placeholder2 from '../images/other/placeholder2.webp'
const Section1 = (props) => {
  const { t } = props
  return (
    <section className="aboutEasylinkSection1" id="Certificate">
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('AboutEasylink.Certificate.Title')}
      </BannerButton>
      <div className="photo d-flex justify-content-evenly flex-wrap">
        <div className="col-lg-3 mx-4">
          <Carousel controls={false} variant="dark" interval={null} fade>
            <Carousel.Item>
              <a href={iatf16949} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={IATF16949}
                  alt={`IATF16949`}
                  placeholder={placeholder2}
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href={iatf16949} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={IATF169492}
                  alt={`IATF169492`}
                  placeholder={placeholder2}
                />
              </a>
            </Carousel.Item>
          </Carousel>
          <h4 className="text">{t('AboutEasylink.Certificate.IATF')}</h4>
        </div>
        <div className="col-lg-3 mx-4">
          <Carousel controls={false} variant="dark" interval={null} fade>
            <Carousel.Item>
              <a href={iso14001} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={ISO14001}
                  alt={`ISO14001`}
                  placeholder={placeholder2}
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href={iso14001} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={ISO140012}
                  alt={`ISO140012`}
                  placeholder={placeholder2}
                />
              </a>
            </Carousel.Item>
          </Carousel>
          <h4 className="text">{t('AboutEasylink.Certificate.ISO')}</h4>
        </div>
        <div className="col-lg-3 mx-4">
          <a href={tqs} target="_blank" rel="noreferrer noopener">
            <ImageLoader src={TQS} alt={`TQS`} placeholder={placeholder2} />
          </a>
          <h4 className="text">
            &nbsp; {t('AboutEasylink.Certificate.TTQS')} &nbsp;
          </h4>
        </div>
      </div>
      <div className="photo-mobile d-none">
        <Carousel variant="dark" fade interval={2500}>
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              <a href={iatf16949} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={IATF16949}
                  alt={`IATF16949`}
                  placeholder={placeholder2}
                />
              </a>
              <h4 className="text">{t('AboutEasylink.Certificate.IATF')}</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              <a href={iatf16949} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={IATF169492}
                  alt={`IATF169492`}
                  placeholder={placeholder2}
                />
              </a>
              <h4 className="text">{t('AboutEasylink.Certificate.IATF')}</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              <a href={iso14001} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={ISO14001}
                  alt={`ISO14001`}
                  placeholder={placeholder2}
                />
              </a>
              <h4 className="text">{t('AboutEasylink.Certificate.ISO')}</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              <a href={iso14001} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={ISO140012}
                  alt={`ISO140012`}
                  placeholder={placeholder2}
                />
              </a>
              <h4 className="text">{t('AboutEasylink.Certificate.ISO')}</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              <a href={tqs} target="_blank" rel="noreferrer noopener">
                <ImageLoader src={TQS} alt={`TQS`} placeholder={placeholder2} />
              </a>
              <h4 className="text">
                &nbsp; {t('AboutEasylink.Certificate.TTQS')} &nbsp;
              </h4>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { t } = props
  const imgAry = [news1, news2, news3, news4, news5]
  const imgAry2 = [
    technicalCorner1,
    technicalCorner2,
    technicalCorner3,
    technicalCorner4,
    technicalCorner5,
    technicalCorner6,
    technicalCorner7,
  ]
  const newsAry = [
    t('AboutEasylink.News&Events.News1.Content'),
    t('AboutEasylink.News&Events.News2.Content'),
    t('AboutEasylink.News&Events.News3.Content'),
    t('AboutEasylink.News&Events.News4.Content'),
    t('AboutEasylink.News&Events.News5.Content'),
  ]
  const dateAry = [
    t('AboutEasylink.News&Events.News1.Date'),
    t('AboutEasylink.News&Events.News2.Date'),
    t('AboutEasylink.News&Events.News3.Date'),
    t('AboutEasylink.News&Events.News4.Date'),
    t('AboutEasylink.News&Events.News5.Date'),
  ]
  const linkAry = ['/news/1', '/news/2', '/news/3', '/news/4', '/news/5']
  const linkAry2 = [
    '/technical-corner/1',
    '/technical-corner/2',
    '/technical-corner/3',
    '/technical-corner/4',
    '/technical-corner/5',
    '/technical-corner/6',
    '/technical-corner/7',
  ]
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  }
  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  }
  return (
    <>
      <section className="aboutEasylinkSection2" id="News&Events">
        <BannerButton color={`darkGreen`} location={`left`}>
          {t('AboutEasylink.News&Events.Title')}
        </BannerButton>
        <DragCarousel
          imgAry={imgAry}
          newsAry={newsAry}
          dateAry={dateAry}
          linkAry={linkAry}
          responsive={responsive}
          placeholder={placeholder}
        />
      </section>
      <section className="aboutEasylinkSection2" id="TechnicalCorner">
        <BannerButton color={`darkGreen`} location={`left`}>
          {t('AboutEasylink.TechnicalCorner.Title')}
        </BannerButton>
        <DragCarousel
          imgAry={imgAry2}
          linkAry={linkAry2}
          responsive={responsive2}
          placeholder={placeholder}
        />
      </section>
    </>
  )
}
const Section3 = (props) => {
  const { t } = props
  const backgroundImage = BackgroundImageLoader(worldMap)
  const ref = useRef([])
  const year = ['1992', '2005~2008', '2010~2017', '2019', '2021']
  const event = [
    t('AboutEasylink.History.1992'),
    t('AboutEasylink.History.2005'),
    t('AboutEasylink.History.2010'),
    t('AboutEasylink.History.2019'),
    t('AboutEasylink.History.2021'),
  ]

  const [page, setPage] = useState(1)
  const handleMoveParallax = () => {
    setPage(page + 1)
  }
  useEffect(() => {
    if (page > 5) {
      setPage(1)
    }
  }, [page])
  return (
    <section
      className="aboutEasylinkSection3"
      id="History"
      style={{
        backgroundImage: `url(${backgroundImage || worldMapPlaceholder})`,
      }}
    >
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('AboutEasylink.History.Title')}
      </BannerButton>
      <button
        type="button"
        className="scroll-button"
        onClick={handleMoveParallax}
      ></button>
      <div className="timeline">
        <span id="hint">{t('AboutEasylink.History.Hint')}</span>
        <div className={`parallax page${page}`} ref={ref}>
          {event.map((v, i) =>
            i % 2 === 0 ? (
              <div className="box left" key={i}>
                <div className="hexagon left">
                  {year[i].includes('~') ? (
                    <h5 className="years2">
                      {year[i].split('~')[0]}
                      <br />
                      <br />
                      <span className="tilde">{year[i].split('~')[1]}</span>
                    </h5>
                  ) : (
                    <h5 className="years">{year[i]}</h5>
                  )}
                </div>
                {event[i].includes('#') ? (
                  <div className="content">
                    {event[i].split('#').map((v2, i2) => (
                      <p key={i2}>{v2}</p>
                    ))}
                  </div>
                ) : (
                  <p>{event[i]}</p>
                )}
              </div>
            ) : (
              <div className="box right" key={i}>
                <div className="hexagon right">
                  {year[i].includes('~') ? (
                    <h5 className="years2">
                      {year[i].split('~')[0]}
                      <br />
                      <br />
                      <span className="tilde">{year[i].split('~')[1]}</span>
                    </h5>
                  ) : (
                    <h5 className="years">{year[i]}</h5>
                  )}
                </div>
                {event[i].includes('#') ? (
                  <div className="content">
                    {event[i].split('#').map((v2, i2) => (
                      <p key={i2}>{v2}</p>
                    ))}
                  </div>
                ) : (
                  <p>{event[i]}</p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
const Section4 = (props) => {
  const { t } = props
  const subject = [
    t('AboutEasylink.Philosophy.PhilosophySubject.Customers'),
    t('AboutEasylink.Philosophy.PhilosophySubject.Employees'),
    t('AboutEasylink.Philosophy.PhilosophySubject.Share Holders'),
    t('AboutEasylink.Philosophy.PhilosophySubject.Society'),
    t('AboutEasylink.Philosophy.PhilosophySubject.Enviroment'),
  ]
  const content = [
    t('AboutEasylink.Philosophy.PhilosophyContent.Customers'),
    t('AboutEasylink.Philosophy.PhilosophyContent.Employees'),
    t('AboutEasylink.Philosophy.PhilosophyContent.Share Holders'),
    t('AboutEasylink.Philosophy.PhilosophyContent.Society'),
    t('AboutEasylink.Philosophy.PhilosophyContent.Enviroment'),
  ]
  return (
    <section
      className="aboutEasylinkSection4 d-flex flex-wrap justify-content-between"
      id="Philosophy"
    >
      <BannerButton color={`lightGreen`} location={`left`}>
        {t('AboutEasylink.Philosophy.Title')}
      </BannerButton>
      <div className="content-left col-lg-7 col-md-10">
        <Title
          text={t('AboutEasylink.Philosophy.PhilosophySlogan')}
          col={`col-lg-9 col-md-10`}
          aos={`fade-right`}
        />
        <div className="describtion col-lg-8 col-md-10" data-aos="zoom-in">
          <p>
            {t('AboutEasylink.Philosophy.PhilosophySlogan2').split('-')[0]}
            <br />
            {t('AboutEasylink.Philosophy.PhilosophySlogan2').split('-')[1]}
            <br />
            {t('AboutEasylink.Philosophy.PhilosophySlogan2').split('-')[2]}
          </p>
        </div>
      </div>
      <div className="col-lg-5 col-md-10 content-right" data-aos="zoom-in">
        {subject.map((v, i) => (
          <div key={i} className="mb-4">
            <h3>{v}</h3>
            <p>{content[i]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
function AboutEasylink(props) {
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.AboutEasylink.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta
          property="og:title"
          content={t('HeaderNavbar.AboutEasylink.Title')}
        />
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

export default withRouter(AboutEasylink)

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
import tqs from '../files/Certificate/TQS.pdf'
import iso14001 from '../files/Certificate/ISO14001.pdf'
import iatf16949 from '../files/Certificate/IATF16949.pdf'
import worldMap from '../images/aboutEasy/worldMap.webp'
import worldMapPlaceholder from '../images/aboutEasy/worldMap-placeholder.webp'
import placeholder from '../images/other/placeholder.webp'
import placeholder2 from '../images/other/placeholder2.webp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ListAllNewsDetailsAsync,
  ListAllTechnicalCornerDetailsAsync,
  ListAllHistoryDetailsAsync,
} from '../actions'
const Section1 = () => {
  return (
    <section className="aboutEasylinkSection1" id="Certificate">
      <BannerButton color={`darkGreen`} location={`left`}>
        Certificate
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
          <h4 className="text">IATF 16949</h4>
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
          <h4 className="text">ISO 14001</h4>
        </div>
        <div className="col-lg-3 mx-4">
          <a href={tqs} target="_blank" rel="noreferrer noopener">
            <ImageLoader src={TQS} alt={`TQS`} placeholder={placeholder2} />
          </a>
          <h4 className="text">&nbsp; TTQS &nbsp;</h4>
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
              <h4 className="text">IATF 16949</h4>
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
              <h4 className="text">IATF 16949</h4>
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
              <h4 className="text">ISO 14001</h4>
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
              <h4 className="text">ISO 14001</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              <a href={tqs} target="_blank" rel="noreferrer noopener">
                <ImageLoader src={TQS} alt={`TQS`} placeholder={placeholder2} />
              </a>
              <h4 className="text">&nbsp; TTQS &nbsp;</h4>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { allNewsDetails, allTechnicalCornerDetails } = props
  const [imgAry, setImgAry] = useState([])
  const [newsAry, setNewsAry] = useState([])
  const [dateAry, setDateAry] = useState([])
  const [linkAry, setLinkAry] = useState([])
  const [imgAry2, setImgAry2] = useState([])
  const [linkAry2, setLinkAry2] = useState([])
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
  useEffect(() => {
    if (allNewsDetails.length !== 0) {
      const newsAry = []
      const dateAry = []
      const linkAry = []
      const imgAry = []
      for (let i = 0; i < allNewsDetails.length; i++) {
        imgAry.push('news' + allNewsDetails[i].nID)
        newsAry.push(allNewsDetails[i].title)
        dateAry.push(allNewsDetails[i].month + ' ' + allNewsDetails[i].year)
        linkAry.push('/news/' + allNewsDetails[i].nID)
      }
      setImgAry([...imgAry])
      setNewsAry([...newsAry])
      setDateAry([...dateAry])
      setLinkAry([...linkAry])
    }
  }, [allNewsDetails])
  useEffect(() => {
    if (allTechnicalCornerDetails.length !== 0) {
      const linkAry = []
      const imgAry = []
      for (let i = 0; i < allTechnicalCornerDetails.length; i++) {
        imgAry.push('technicalCorner' + allTechnicalCornerDetails[i].tID)
        linkAry.push('/technicalCorner/' + allTechnicalCornerDetails[i].tID)
      }
      setImgAry2([...imgAry])
      setLinkAry2([...linkAry])
    }
  }, [allTechnicalCornerDetails])
  return (
    <>
      <section className="aboutEasylinkSection2" id="News&Events">
        <BannerButton color={`darkGreen`} location={`left`}>
          News & Events
        </BannerButton>
        {allNewsDetails.length === 0 ? (
          <></>
        ) : (
          <DragCarousel
            imgAry={imgAry}
            newsAry={newsAry}
            dateAry={dateAry}
            linkAry={linkAry}
            responsive={responsive}
            placeholder={placeholder}
          />
        )}
      </section>
      <section className="aboutEasylinkSection2" id="TechnicalCorner">
        <BannerButton color={`darkGreen`} location={`left`}>
          Technical Corner
        </BannerButton>
        {allTechnicalCornerDetails.length === 0 ? (
          <></>
        ) : (
          <DragCarousel
            imgAry={imgAry2}
            linkAry={linkAry2}
            responsive={responsive}
            placeholder={placeholder}
          />
        )}
      </section>
    </>
  )
}
const Section3 = (props) => {
  const { allHistoryDetails } = props
  const backgroundImage = BackgroundImageLoader(worldMap)
  const [page, setPage] = useState(1)
  const ref = useRef([])
  const handleMoveParallax = () => {
    setPage(page + 1)
  }
  useEffect(() => {
    if (page > allHistoryDetails.length) {
      setPage(1)
    }
  }, [page, allHistoryDetails])
  return (
    <section
      className="aboutEasylinkSection3"
      id="History"
      style={{
        backgroundImage: `url(${backgroundImage || worldMapPlaceholder})`,
      }}
    >
      <BannerButton color={`darkGreen`} location={`left`}>
        History
      </BannerButton>
      <button
        type="button"
        className="scroll-button"
        onClick={handleMoveParallax}
      ></button>
      <div className="timeline">
        <div className={`parallax page${page}`} ref={ref}>
          {allHistoryDetails.length === 0 ? (
            <></>
          ) : (
            allHistoryDetails.map((v, i) =>
              i % 2 === 0 ? (
                <div className="box left" key={i}>
                  <div className="hexagon left">
                    {allHistoryDetails[i].year.includes('~') ? (
                      <h5 className="years2">
                        {allHistoryDetails[i].year.split('~')[0]}
                        <br />
                        <br />
                        <span className="tilde">
                          {allHistoryDetails[i].year.split('~')[1]}
                        </span>
                      </h5>
                    ) : (
                      <h5 className="years">{allHistoryDetails[i].year}</h5>
                    )}
                  </div>
                  {allHistoryDetails[i].content.includes('--') ? (
                    <div className="content">
                      {allHistoryDetails[i].content
                        .split('--')
                        .map((v2, i2) => (
                          <p key={i2}>{v2}</p>
                        ))}
                    </div>
                  ) : (
                    <p>{allHistoryDetails[i].content}</p>
                  )}
                </div>
              ) : (
                <div className="box right" key={i}>
                  <div className="hexagon right">
                    {allHistoryDetails[i].year.includes('~') ? (
                      <h5 className="years2">
                        {allHistoryDetails[i].year.split('~')[0]}
                        <br />
                        <br />
                        <span className="tilde">
                          {allHistoryDetails[i].year.split('~')[1]}
                        </span>
                      </h5>
                    ) : (
                      <h5 className="years">{allHistoryDetails[i].year}</h5>
                    )}
                  </div>
                  {allHistoryDetails[i].content.includes('--') ? (
                    <div className="content">
                      {allHistoryDetails[i].content
                        .split('--')
                        .map((v2, i2) => (
                          <p key={i2}>{v2}</p>
                        ))}
                    </div>
                  ) : (
                    <p>{allHistoryDetails[i].content}</p>
                  )}
                </div>
              )
            )
          )}
        </div>
      </div>
    </section>
  )
}
const Section4 = () => {
  const subject = [
    'To Our Customers:',
    'To Our Employees:',
    'To Share Holders:',
    'To Society:',
    'To the Enviroment:',
  ]
  const content = [
    'To provide exceptional quality, delivery, and price.',
    'Easylink promotes a safe, clean and comfortable working environment, providing employee security with comprehensive benefits.',
    'To maximize return on their investment.',
    'To benefit the community through philanthropic contributions.',
    'To promote environmental awareness by following GREEN practices, ensuring a safe environment for the next generation.',
  ]
  return (
    <section
      className="aboutEasylinkSection4 d-flex flex-wrap justify-content-between"
      id="Philosophy"
    >
      <BannerButton color={`lightGreen`} location={`left`}>
        Philosophy
      </BannerButton>
      <div className="content-left col-lg-7 col-md-10">
        <Title
          text={
            'The Most Satisfaction -To Our #Customers, #Employees, #Share #Holders, #Society, and #the #Environment.'
          }
          col={`col-lg-9 col-md-10`}
          aos={`fade-right`}
        />
        <div className="describtion col-lg-8 col-md-10" data-aos="zoom-in">
          <p>
            Since its inception,
            <br />
            Easylink has been committed to
            <br />
            these principles and philosophies.
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
function AboutEasylink2(props) {
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  const {
    allNewsDetails,
    allTechnicalCornerDetails,
    allHistoryDetails,
    ListAllNewsDetailsAsync,
    ListAllTechnicalCornerDetailsAsync,
    ListAllHistoryDetailsAsync,
  } = props
  useEffect(() => {
    ListAllNewsDetailsAsync()
    ListAllTechnicalCornerDetailsAsync()
    ListAllHistoryDetailsAsync()
  }, [])
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.AboutEasylink.Title')} | Easylink Industrial CO.,LTD.
        </title>
      </Helmet>
      <main>
        <Section1 />
        <Section2
          allNewsDetails={allNewsDetails}
          allTechnicalCornerDetails={allTechnicalCornerDetails}
        />
        <Section3 allHistoryDetails={allHistoryDetails} />
        <Section4 />
      </main>
    </>
  )
}
const mapStateToProps = (store) => {
  return {
    allNewsDetails: store.allNewsDetails,
    allTechnicalCornerDetails: store.allTechnicalCornerDetails,
    allHistoryDetails: store.allHistoryDetails,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ListAllNewsDetailsAsync,
      ListAllTechnicalCornerDetailsAsync,
      ListAllHistoryDetailsAsync,
    },
    dispatch
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AboutEasylink2))

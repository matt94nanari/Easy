import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Card, Carousel, Image } from 'react-bootstrap'
import Award1 from '../images/testimonial/Award1.webp'
import Award2 from '../images/testimonial/Award2.webp'
import Award3 from '../images/testimonial/Award3.webp'
import Email1 from '../images/testimonial/Email1.webp'
import Email2 from '../images/testimonial/Email2.webp'
import Email3 from '../images/testimonial/Email3.webp'
import Email4 from '../images/testimonial/Email4.webp'
import Email5 from '../images/testimonial/Email5.webp'
import Email6 from '../images/testimonial/Email6.webp'
import Email7 from '../images/testimonial/Email7.webp'
import Email8 from '../images/testimonial/Email8.webp'
import Email9 from '../images/testimonial/Email9.webp'
import ScoreCard1 from '../images/testimonial/Score Card1.webp'
import ScoreCard2 from '../images/testimonial/Score Card2.webp'
import ScoreCard3 from '../images/testimonial/Score Card3.webp'
import ScoreCard4 from '../images/testimonial/Score Card4.webp'
import ScoreCard5 from '../images/testimonial/Score Card5.webp'
import ScoreCard6 from '../images/testimonial/Score Card6.webp'
import ScoreCard7 from '../images/testimonial/Score Card7.webp'
import ScoreCard8 from '../images/testimonial/Score Card8.webp'
import ScoreCard9 from '../images/testimonial/Score Card9.webp'
import Audit1 from '../images/testimonial/Audit1.webp'
import Audit2 from '../images/testimonial/Audit2.webp'
import Audit3 from '../images/testimonial/Audit3.webp'
import Audit4 from '../images/testimonial/Audit4.webp'
import Audit5 from '../images/testimonial/Audit5.webp'
import Audit6 from '../images/testimonial/Audit6.webp'
import Audit7 from '../images/testimonial/Audit7.webp'
import Audit8 from '../images/testimonial/Audit8.webp'
import Audit9 from '../images/testimonial/Audit9.webp'
import Audit10 from '../images/testimonial/Audit10.webp'
import mascot from '../images/other/mascot.webp'
import mascot2 from '../images/other/mascot2.webp'
import email1 from '../files/testimonial/Email1.pdf'
import email2 from '../files/testimonial/Email2.pdf'
import email3 from '../files/testimonial/Email3.pdf'
import email4 from '../files/testimonial/Email4.pdf'
import email5 from '../files/testimonial/Email5.pdf'
import email6 from '../files/testimonial/Email6.pdf'
import email7 from '../files/testimonial/Email7.pdf'
import email8 from '../files/testimonial/Email8.pdf'
import email9 from '../files/testimonial/Email9.pdf'
import scoreCard1 from '../files/testimonial/Score Card1.pdf'
import scoreCard2 from '../files/testimonial/Score Card2.pdf'
import scoreCard3 from '../files/testimonial/Score Card3.pdf'
import scoreCard4 from '../files/testimonial/Score Card4.pdf'
import scoreCard5 from '../files/testimonial/Score Card5.pdf'
import scoreCard6 from '../files/testimonial/Score Card6.pdf'
import scoreCard7 from '../files/testimonial/Score Card7.pdf'
import scoreCard8 from '../files/testimonial/Score Card8.pdf'
import scoreCard9 from '../files/testimonial/Score Card9.pdf'
import audit1 from '../files/testimonial/Audit1.pdf'
import audit2 from '../files/testimonial/Audit2.pdf'
import audit3 from '../files/testimonial/Audit3.pdf'
import audit4 from '../files/testimonial/Audit4.pdf'
import audit5 from '../files/testimonial/Audit5.pdf'
import audit6 from '../files/testimonial/Audit6.pdf'
import audit7 from '../files/testimonial/Audit7.pdf'
import audit8 from '../files/testimonial/Audit8.pdf'
import audit9 from '../files/testimonial/Audit9.pdf'
import audit10 from '../files/testimonial/Audit10.pdf'
import placeholder from '../images/other/placeholder2.webp'
import ImageLoader from '../components/ImageLoader'
const Section1 = (props) => {
  const { t } = props
  const awardAry = [Award1, Award2, Award3]
  const emailAry = [
    Email1,
    Email2,
    Email3,
    Email4,
    Email5,
    Email6,
    Email7,
    Email8,
    Email9,
  ]
  const scoreCardAry = [
    ScoreCard1,
    ScoreCard2,
    ScoreCard3,
    ScoreCard4,
    ScoreCard5,
    ScoreCard6,
    ScoreCard7,
    ScoreCard8,
    ScoreCard9,
  ]
  const auditAry = [
    Audit1,
    Audit2,
    Audit3,
    Audit4,
    Audit5,
    Audit6,
    Audit7,
    Audit8,
    Audit9,
    Audit10,
  ]
  const titleAry = [
    t('Testimonial.Award'),
    t('Testimonial.Email'),
    t('Testimonial.ScoreCard'),
    t('Testimonial.Audit'),
  ]
  const imageAry = [awardAry, emailAry, scoreCardAry, auditAry]
  const fileAry = [
    [Award1, Award2, Award3],
    [email1, email2, email3, email4, email5, email6, email7, email8, email9],
    [
      scoreCard1,
      scoreCard2,
      scoreCard3,
      scoreCard4,
      scoreCard5,
      scoreCard6,
      scoreCard7,
      scoreCard8,
      scoreCard9,
    ],
    [
      audit1,
      audit2,
      audit3,
      audit4,
      audit5,
      audit6,
      audit7,
      audit8,
      audit9,
      audit10,
    ],
  ]
  const handleSlid = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    props.setShowLoader(false)
  }
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  useEffect(() => {
    if (props.testimonialContent) {
      switch (props.testimonialContent) {
        case 'Award':
          handleSelect(0)
          break
        case 'email':
          handleSelect(1)
          break
        case 'score card':
          handleSelect(2)
          break
        case 'audit':
          handleSelect(3)
          break
        default:
          handleSelect(0)
          break
      }
    }
  }, [props])
  return (
    <section className="testimonialSection1" id="Testimonial">
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('Testimonial.Title')}
      </BannerButton>
      <ul className="d-flex flex-wrap button-list">
        <li className="mb-3 me-3">
          <button
            type="button"
            onClick={() => {
              handleSelect(0)
              props.setTestimonialContent('Award')
            }}
          >
            {t('Testimonial.Award')}
          </button>
        </li>
        <li className="mb-3 me-3">
          <button
            type="button"
            onClick={() => {
              handleSelect(0)
              props.setTestimonialContent('email')
            }}
          >
            {t('Testimonial.Email')}
          </button>
        </li>
        <li className="mb-3 me-3">
          <button
            type="button"
            onClick={() => {
              handleSelect(1)
              props.setTestimonialContent('score card')
            }}
          >
            {t('Testimonial.ScoreCard')}
          </button>
        </li>
        <li className="mb-3">
          <button
            type="button"
            onClick={() => {
              handleSelect(2)
              props.setTestimonialContent('audit')
            }}
          >
            {t('Testimonial.Audit')}
          </button>
        </li>
      </ul>
      <Carousel
        controls={false}
        indicators={false}
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        onSlid={handleSlid}
        onSlide={() => {
          props.setShowLoader(true)
        }}
      >
        {imageAry.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="file-list d-flex flex-wrap">
              {item.map((v, i) => (
                <Card
                  className="col-lg-3 mb-5"
                  key={i}
                  data-aos={i >= 3 ? `zoom-in` : ''}
                >
                  <Card.Body>
                    <Card.Title>{titleAry[index] + ' - ' + [i + 1]}</Card.Title>
                  </Card.Body>
                  <a
                    href={fileAry[index][i]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ImageLoader
                      src={v}
                      alt={titleAry[index] + ` - ${i + 1}`}
                      placeholder={placeholder}
                      className={`card-img`}
                    />
                  </a>
                  {index === 0 ? (
                    <p className="mx-auto">
                      <br />
                      <strong>{t(`Testimonial.Award${i + 1}`)}</strong>
                    </p>
                  ) : null}
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Image src={mascot} alt="mascot" className="mascot" thumbnail />
      <Image src={mascot2} alt="mascot" className="mascot2" thumbnail />
    </section>
  )
}
function Testimonial(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('Testimonial.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('Testimonial.Title')} />
      </Helmet>
      <main>
        <Section1
          setShowLoader={props.setShowLoader}
          testimonialContent={props.testimonialContent}
          setTestimonialContent={props.setTestimonialContent}
          t={t}
        />
      </main>
    </>
  )
}
export default withRouter(Testimonial)

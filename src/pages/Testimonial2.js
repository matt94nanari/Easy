import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Card, Carousel, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListAllTestimonialDetailsAsync } from '../actions'
import mascot from '../images/other/mascot.webp'
import mascot2 from '../images/other/mascot2.webp'
import placeholder from '../images/other/placeholder2.webp'
import ImageLoader from '../components/ImageLoader'
const Section1 = (props) => {
  const { testimonialAry } = props
  const titleAry = ['Email', 'Score Card', 'Audit']
  const { t } = useTranslation()
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
        case 'email':
          handleSelect(0)
          break
        case 'score card':
          handleSelect(1)
          break
        case 'audit':
          handleSelect(2)
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
        {t('HeaderNavbar.Testimonial.Title')}
      </BannerButton>
      <ul className="d-flex flex-wrap offset-lg-6 offset-sm-4 offset-3 button-list">
        <li className="mb-3 col-4">
          <button
            type="button"
            onClick={() => {
              handleSelect(0)
              props.setTestimonialContent('email')
            }}
          >
            Email
          </button>
        </li>
        <li className="mb-3 col-4">
          <button
            type="button"
            onClick={() => {
              handleSelect(1)
              props.setTestimonialContent('score card')
            }}
          >
            Score Card
          </button>
        </li>
        <li className="mb-3 col-4">
          <button
            type="button"
            onClick={() => {
              handleSelect(2)
              props.setTestimonialContent('audit')
            }}
          >
            Audit
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
        {testimonialAry.map((item, index) => (
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
                    href={require('../files/testimonial/' +
                      item[i].catagory +
                      (i + 1) +
                      '.pdf')}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ImageLoader
                      src={require('../images/testimonial/' +
                        item[i].catagory +
                        (i + 1) +
                        '.webp')}
                      alt={titleAry[index] + ` - ${i + 1}`}
                      placeholder={placeholder}
                      className={`card-img`}
                    />
                  </a>
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
  const { allTestimonialDetails, ListAllTestimonialDetailsAsync } = props
  const [testimonialAry, setTestimonialAry] = useState([])
  useEffect(() => {
    ListAllTestimonialDetailsAsync()
  }, [])
  useEffect(() => {
    if (allTestimonialDetails.length > 0) {
      const emailAry = []
      const scoreCardAry = []
      const auditAry = []
      allTestimonialDetails.map((v, i) => {
        if (v.catagory === 'Email') {
          emailAry.push(v)
        } else if (v.catagory === 'Score Card') {
          scoreCardAry.push(v)
        } else if (v.catagory === 'Audit') {
          auditAry.push(v)
        }
        const testimonialAry = [emailAry, scoreCardAry, auditAry]
        return setTestimonialAry(testimonialAry)
      })
    }
  }, [allTestimonialDetails])
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.Testimonial.Title')} | Easylink Industrial CO.,LTD.
        </title>
      </Helmet>
      <main>
        <Section1
          testimonialAry={testimonialAry}
          setShowLoader={props.setShowLoader}
          testimonialContent={props.testimonialContent}
          setTestimonialContent={props.setTestimonialContent}
        />
      </main>
    </>
  )
}
const mapStateToProps = (store) => {
  return {
    allTestimonialDetails: store.allTestimonialDetails,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ListAllTestimonialDetailsAsync }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Testimonial))

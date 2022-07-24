import React, { useState, useEffect } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Card, Modal, Image, Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListAllEmployeeGardenDetailsAsync } from '../actions'
import placeholder from '../images/other/placeholder.webp'
import ImageLoader from '../components/ImageLoader'
const Section1 = (props) => {
  const { fetchedAry } = props
  const [yearAry, setYearAry] = useState([])
  const [imageAry, setImageAry] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  const [modalContent, setModalContent] = useState([])
  const [modalYear, setModalYear] = useState('')
  const [indexModal, setIndexModal] = useState(0)
  const handleSelectModal = (selectedIndex) => {
    setIndexModal(selectedIndex)
  }
  const handleSlid = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    props.setShowLoader(false)
  }
  useEffect(() => {
    if (fetchedAry.length > 0) {
      const imageAryCopy = [...fetchedAry]
      const year = []
      const image = []
      const filter = (ary) => {
        let a = ary[0]
        year.push(a)
        let b = 0
        const sortedAry = []
        ary.map((v, i) => {
          if (v !== a) {
            sortedAry.push(v)
          } else {
            b = b + 1
          }
          return sortedAry
        })
        const c = []
        for (let i = 0; i < b; i++) {
          c.push(ary[i])
        }
        image.push(c)
        ary.splice(0, b)
        if (ary.length > 0) {
          filter(ary)
        }
      }
      filter(imageAryCopy)
      setYearAry(year)
      setImageAry(image)
      setModalContent(image[0])
      setModalYear(year[0])
    }
  }, [fetchedAry])
  return (
    <section className="employeeGardenSection1">
      <BannerButton color={`darkGreen`}> Employee Garden</BannerButton>
      <ul className="d-flex flex-wrap button-list offset-sm-6 offset-4">
        {yearAry.length > 0 ? (
          yearAry.map((v, i) => (
            <li className="mb-3 col-4" key={i}>
              <button
                type="button"
                onClick={() => {
                  handleSelect(i)
                }}
              >
                {v}
              </button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
        onSlid={handleSlid}
        onSlide={() => {
          props.setShowLoader(true)
        }}
      >
        {yearAry.length > 0 ? (
          imageAry.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="photo d-flex flex-wrap">
                {item.map((v, i) => (
                  <Card
                    className="col-lg-4 col-md-6 col-sm-6"
                    key={i}
                    data-aos={i >= 6 ? `zoom-in` : ''}
                  >
                    <Card.Body>
                      <Card.Title>
                        {'Company Trip' + yearAry[index] + ' - ' + [i + 1]}
                      </Card.Title>
                    </Card.Body>
                    <ImageLoader
                      src={require('../images/employeeGarden/' +
                        yearAry[index] +
                        '-trip/' +
                        yearAry[index] +
                        '-' +
                        (i + 1) +
                        '.webp')}
                      className={`card-img`}
                      alt={`trip-${yearAry[index]}-${i + 1}`}
                      onClick={() => {
                        setModalContent(item)
                        setModalYear(yearAry[index])
                        handleShow()
                        handleSelectModal(i)
                      }}
                      placeholder={placeholder}
                    />
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))
        ) : (
          <></>
        )}
      </Carousel>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <Carousel
          className="carousel-in-modal"
          indicators={false}
          activeIndex={indexModal}
          onSelect={handleSelectModal}
          fade
        >
          {modalContent.length > 0 ? (
            modalContent.map((v, i) => (
              <Carousel.Item key={i}>
                <Image
                  thumbnail
                  src={require('../images/employeeGarden/' +
                    modalYear +
                    '-trip/' +
                    modalYear +
                    '-' +
                    (i + 1) +
                    '.webp')}
                  alt={`trip-${modalYear}-${i + 1}`}
                />
              </Carousel.Item>
            ))
          ) : (
            <></>
          )}
        </Carousel>
      </Modal>
    </section>
  )
}
function EmployeeGarden(props) {
  const { t } = useTranslation()
  const { allEmployeeGardenDetails, ListAllEmployeeGardenDetailsAsync } = props
  const [fetchedAry, setFetchedAry] = useState([])
  useEffect(() => {
    ListAllEmployeeGardenDetailsAsync()
  }, [])
  useEffect(() => {
    if (allEmployeeGardenDetails.length > 0) {
      const ary = []
      allEmployeeGardenDetails.map((v, i) => {
        return ary.push(v.year)
      })
      setFetchedAry(ary)
    }
  }, [allEmployeeGardenDetails])
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>Employee Garden| Easylink Industrial CO.,LTD.</title>
      </Helmet>
      <main>
        <Section1 setShowLoader={props.setShowLoader} fetchedAry={fetchedAry} />
      </main>
    </>
  )
}
const mapStateToProps = (store) => {
  return {
    allEmployeeGardenDetails: store.allEmployeeGardenDetails,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ListAllEmployeeGardenDetailsAsync }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EmployeeGarden))

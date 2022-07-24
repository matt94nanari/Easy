import React, { useState, useEffect } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Card, Modal, Image, Carousel } from 'react-bootstrap'
import placeholder from '../images/other/placeholder.webp'
import ImageLoader from '../components/ImageLoader'
const Section1 = (props) => {
  const { t } = props
  const imgAry2018 = []
  const imgAry2019 = []
  const imgAry2020 = []
  for (let i = 1; i <= 9; i++) {
    imgAry2018.push('')
    imgAry2019.push('')
    imgAry2020.push('')
  }
  const imgAry = [imgAry2018, imgAry2019, imgAry2020]
  const yearAry = ['2018', '2019', '2020']
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  const [modalContent, setModalContent] = useState(imgAry2018)
  const [modalYear, setModalYear] = useState('2018')
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
  return (
    <section className="employeeGardenSection1">
      <BannerButton color={`darkGreen`}>
        {t('EmployeeGarden.Title')}
      </BannerButton>
      <ul className="d-flex flex-wrap offset-sm-6 offset-4 button-list">
        {yearAry.map((v, i) => (
          <li className="col-4 mb-3" key={i}>
            <button
              type="button"
              onClick={() => {
                handleSelect(i)
              }}
            >
              {v}
            </button>
          </li>
        ))}
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
        {imgAry.map((item, index) => (
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
                      {t('EmployeeGarden.Content') +
                        yearAry[index] +
                        ' - ' +
                        [i + 1]}
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
        ))}
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
          {modalContent.map((v, i) => (
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
          ))}
        </Carousel>
      </Modal>
    </section>
  )
}
function EmployeeGarden(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('EmployeeGarden.Title')}| {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('EmployeeGarden.Title')} />
      </Helmet>
      <main>
        <Section1 setShowLoader={props.setShowLoader} t={t} />
      </main>
    </>
  )
}

export default withRouter(EmployeeGarden)

import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Modal, Carousel, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import BannerButton from '../components/BannerButton'
import ImageLoader from '../components/ImageLoader'
import WindowWidth from '../components/WindowWidth'
import lab from '../images/lab/lab.webp'
import labPlaceholder from '../images/lab/lab-placeholder.webp'
import straightnessGage from '../images/lab/straightnessGage.webp'
import straightnessGagePlaceholder from '../images/lab/straightnessGage-placeholder.webp'
import ringGage from '../images/lab/ringGage.webp'
import ringGagePlaceholder from '../images/lab/ringGage-placeholder.webp'
import hydrogenEmbrittlementTest from '../images/lab/hydrogenEmbrittlementTest.webp'
import hydrogenEmbrittlementTestPlaceholder from '../images/lab/hydrogenEmbrittlementTest-placeholder.webp'
import camout from '../images/lab/camout.webp'
import camoutPlaceholder from '../images/lab/camout-placeholder.webp'
import heightGage from '../images/lab/heightGage.webp'
import heightGagePlaceholder from '../images/lab/heightGage-placeholder.webp'
import projector from '../images/lab/projector.webp'
import ImageDimensionMeasurementSystem from '../images/lab/ImageDimensionMeasurementSystem.webp'
import ImageDimensionMeasurementSystemPlaceholder from '../images/lab/ImageDimensionMeasurementSystem-placeholder.webp'
import projectorPlaceholder from '../images/lab/projector-placeholder.webp'
import saltSpray from '../images/lab/saltSpray.webp'
import saltSprayPlaceholder from '../images/lab/saltSpray-placeholder.webp'
import hardness from '../images/lab/hardness.webp'
import hardnessPlaceholder from '../images/lab/hardness-placeholder.webp'
import metallurgy from '../images/lab/metallurgy.webp'
import metallurgyPlaceholder from '../images/lab/metallurgy-placeholder.webp'
import torque from '../images/lab/torque.webp'
import torquePlaceholder from '../images/lab/torque-placeholder.webp'
import tensile from '../images/lab/tensile.webp'
import tensilePlaceholder from '../images/lab/tensile-placeholder.webp'
import micrometer from '../images/lab/micrometer.webp'
import micrometerPlaceholder from '../images/lab/micrometer-placeholder.webp'
import caliper from '../images/lab/caliper.webp'
import caliperPlaceholder from '../images/lab/caliper-placeholder.webp'
import drillDriveTestMachine from '../images/lab/drillDriveTestMachine.webp'
import drillDriveTestMachinePlaceholder from '../images/lab/drillDriveTestMachine-placeholder.webp'
import xRay from '../images/lab/xRay.webp'
import xRayPlaceholder from '../images/lab/xRay-placeholder.webp'
import taf from '../images/lab/TAF.webp'
import taf2 from '../images/lab/TAF2.webp'
import taf3 from '../images/lab/TAF3.webp'
import placeholder from '../images/other/placeholder2.webp'
import TAF from '../files/Certificate/TAF.pdf'
import calibration from '../images/lab/calibration.webp'
import calibrationPlaceholder from '../images/lab/calibration-placeholder.webp'
import calibration2 from '../images/lab/calibration2.webp'
import calibration2Placeholder from '../images/lab/calibration2-placeholder.webp'
import calibration3 from '../images/lab/calibration3.webp'
import calibration3Placeholder from '../images/lab/calibration3-placeholder.webp'
import calibration4 from '../images/lab/calibration4.webp'
import calibration4Placeholder from '../images/lab/calibration4-placeholder.webp'
import calibration5 from '../images/lab/calibration5.webp'
import calibration5Placeholder from '../images/lab/calibration5-placeholder.webp'
import realTimeSpc from '../images/lab/realTimeSpc.webp'
import realTimeSpcPlaceholder from '../images/lab/realTimeSpc-placeholder.webp'
import realTimeSpc2 from '../images/lab/realTimeSpc2.webp'
import realTimeSpc2Placeholder from '../images/lab/realTimeSpc2-placeholder.webp'
import realTimeSpc3 from '../images/lab/realTimeSpc3.webp'
import realTimeSpc3Placeholder from '../images/lab/realTimeSpc3-placeholder.webp'
const Section1 = (props) => {
  const { t } = props
  return (
    <section className="labTestSection1" id="Lab">
      <BannerButton location={`left`} color={`darkGreen`}>
        {t('LabTest.Title')}
      </BannerButton>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="textArea col-lg-5 col-10">
          <div className="title">
            <div className="d-flex">
              <p className="line">_________</p>
              <h3>{t('LabTest.Title')}</h3>
            </div>
            <p className="description">{t('LabTest.Description')}</p>
          </div>
        </div>
        <div className="photo col-lg-7 col-md-9 col-sm-10 col-12">
          <ImageLoader src={lab} alt={`lab`} placeholder={labPlaceholder} />
        </div>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { t } = props
  const imgAry = [taf, taf2, taf3]
  return (
    <section className="labTestSection2" id="LabCertificate">
      <div className="title" data-aos="fade-right">
        <div className="d-flex">
          <p className="line">_________</p>
          <h3>{t('LabTest.LabCertificate.Title')}</h3>
        </div>
      </div>
      <div
        className="photo d-flex justify-content-evenly flex-wrap"
        data-aos="zoom-in"
      >
        {imgAry.map((v, i) => (
          <div className="col-lg-3 col-md-4" key={i}>
            <a href={TAF} target="_blank" rel="noreferrer noopener">
              <ImageLoader
                src={v}
                alt={`taf${i + 1}`}
                placeholder={placeholder}
              />
            </a>
            <h3 className="text">
              &nbsp; {t('LabTest.LabCertificate.TAF')} &nbsp;
            </h3>
          </div>
        ))}
      </div>
      <div className="photo-mobile d-none" data-aos="zoom-in">
        <Carousel variant="dark" fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <div className="col-md-5 col-sm-7 col-8">
                <a href={TAF} target="_blank" rel="noreferrer noopener">
                  <ImageLoader
                    src={v}
                    alt={`taf${i + 1}`}
                    placeholder={placeholder}
                  />
                </a>
                <h3 className="text">
                  &nbsp; {t('LabTest.LabCertificate.TAF')} &nbsp;
                </h3>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
const Section3 = (props) => {
  const { t } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [width, height] = WindowWidth()
  useEffect(() => {
    if (width <= 991) {
      handleClose()
    }
  }, [width])
  const imgAry = [
    ImageDimensionMeasurementSystem,
    projector,
    caliper,
    micrometer,
    straightnessGage,
    heightGage,
    ringGage,
    hardness,
    metallurgy,
    torque,
    hydrogenEmbrittlementTest,
    camout,
    tensile,
    xRay,
    saltSpray,
    drillDriveTestMachine,
  ]
  const placeholderAry = [
    ImageDimensionMeasurementSystemPlaceholder,
    projectorPlaceholder,
    caliperPlaceholder,
    micrometerPlaceholder,
    straightnessGagePlaceholder,
    heightGagePlaceholder,
    ringGagePlaceholder,
    hardnessPlaceholder,
    metallurgyPlaceholder,
    torquePlaceholder,
    hydrogenEmbrittlementTestPlaceholder,
    camoutPlaceholder,
    tensilePlaceholder,
    xRayPlaceholder,
    saltSprayPlaceholder,
    drillDriveTestMachinePlaceholder,
  ]
  const nameAry = [
    t('LabTest.Test.ImageDimensionMeasurementSystem'),
    t('LabTest.Test.Projector'),
    t('LabTest.Test.Caliper'),
    t('LabTest.Test.Micrometer'),
    t('LabTest.Test.StraightnessGage'),
    t('LabTest.Test.HeightGage'),
    t('LabTest.Test.RingGage'),
    t('LabTest.Test.Hardness'),
    t('LabTest.Test.Metallurgy'),
    t('LabTest.Test.Torque'),
    t('LabTest.Test.HydrogenEmbrittlementTest'),
    t('LabTest.Test.Camout'),
    t('LabTest.Test.Tensile'),
    t('LabTest.Test.X-Ray'),
    t('LabTest.Test.SaltSpray'),
    t('LabTest.Test.Drill-DriveTestMachine'),
  ]
  const [indexModal, setIndexModal] = useState(0)
  const handleSelectModal = (selectedIndex) => {
    setIndexModal(selectedIndex)
  }
  const [indexMobile, setIndexMobile] = useState(0)
  const handleSelectMobile = (selectedIndex) => {
    setIndexMobile(selectedIndex)
  }
  const [range, setRange] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    handleSelectMobile(range)
  }, [range])
  useEffect(() => {
    setRange(indexMobile)
  }, [indexMobile])
  useEffect(() => {
    const nameAry = [
      t('LabTest.Test.ImageDimensionMeasurementSystem'),
      t('LabTest.Test.Projector'),
      t('LabTest.Test.Caliper'),
      t('LabTest.Test.Micrometer'),
      t('LabTest.Test.StraightnessGage'),
      t('LabTest.Test.HeightGage'),
      t('LabTest.Test.RingGage'),
      t('LabTest.Test.Hardness'),
      t('LabTest.Test.Metallurgy'),
      t('LabTest.Test.Torque'),
      t('LabTest.Test.HydrogenEmbrittlementTest'),
      t('LabTest.Test.Camout'),
      t('LabTest.Test.Tensile'),
      t('LabTest.Test.X-Ray'),
      t('LabTest.Test.SaltSpray'),
      t('LabTest.Test.Drill-DriveTestMachine'),
    ]
    switch (indexModal) {
      case 0:
        setName(nameAry[0])
        break
      case 1:
        setName(nameAry[1])
        break
      case 2:
        setName(nameAry[2])
        break
      case 3:
        setName(nameAry[3])
        break
      case 4:
        setName(nameAry[4])
        break
      case 5:
        setName(nameAry[5])
        break
      case 6:
        setName(nameAry[6])
        break
      case 7:
        setName(nameAry[7])
        break
      case 8:
        setName(nameAry[8])
        break
      case 9:
        setName(nameAry[9])
        break
      case 10:
        setName(nameAry[10])
        break
      case 11:
        setName(nameAry[11])
        break
      case 12:
        setName(nameAry[12])
        break
      case 13:
        setName(nameAry[13])
        break
      case 14:
        setName(nameAry[14])
        break
      case 15:
        setName(nameAry[15])
        break
      case 16:
        setName(nameAry[16])
        break
      default:
        setName(nameAry[0])
        break
    }
  }, [indexModal, t])
  return (
    <section className="labTestSection3" id="Test">
      <div className="title" data-aos="fade-right">
        <div className="d-flex">
          <p className="line">_________</p>
          <h3>{t('LabTest.Test.Title')}</h3>
        </div>
      </div>
      <div className="photo d-flex flex-wrap">
        {imgAry.map((v, i) => (
          <Card className="col-xl-3 col-sm-5" key={i} data-aos="zoom-in">
            <Card.Body>
              <Card.Title>{nameAry[i]}</Card.Title>
            </Card.Body>
            <ImageLoader
              src={v}
              alt={nameAry[i]}
              className={`card-img`}
              placeholder={placeholderAry[i]}
              onClick={() => {
                handleShow()
                handleSelectModal(i)
              }}
            />
          </Card>
        ))}
      </div>
      <div className="photo-mobile d-none" data-aos="zoom-in">
        <Carousel
          variant="dark"
          indicators={false}
          interval={3000}
          pause="false"
          activeIndex={indexMobile}
          onSelect={handleSelectMobile}
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card className="col-md-9 col-sm-10 col-12">
                <ImageLoader
                  src={v}
                  alt={nameAry[i]}
                  className={`card-img`}
                  placeholder={placeholderAry[i]}
                />
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center my-4 col-md-9 col-sm-10 col-11 mx-auto">
          <div className={`status-bar device${range + 1}`}>
            {nameAry[range] +
              ' ' +
              (range + 1).toString() +
              '/' +
              nameAry.length}
            <Form.Range
              min="0"
              max="15"
              steps="1"
              value={range}
              onChange={(e) => {
                setRange(parseInt(e.target.value))
              }}
            />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <Carousel
          className="carousel-in-modal"
          indicators={false}
          activeIndex={indexModal}
          onSelect={handleSelectModal}
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <ImageLoader
                src={v}
                alt={nameAry[i]}
                placeholder={placeholderAry[i]}
              />
              <div className="text">
                <p>{name}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </section>
  )
}
const Section4 = (props) => {
  const { t } = props
  const imgAry = [realTimeSpc, realTimeSpc2, realTimeSpc3]
  const placeholderAry = [
    realTimeSpcPlaceholder,
    realTimeSpc2Placeholder,
    realTimeSpc3Placeholder,
  ]
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const [width, height] = WindowWidth()
  useEffect(() => {
    if (width <= 991) {
      handleClose()
    }
  }, [width])
  return (
    <section className="labTestSection4">
      <div className="title" data-aos="fade-right">
        <div className="d-flex">
          <p className="line">_________</p>
          <h3>{t('LabTest.SpotInspection.Title')}</h3>
        </div>
      </div>
      <div className="textArea col-10" data-aos="fade-left">
        <p className="description">{t('LabTest.SpotInspection.Description')}</p>
      </div>
      <div className="photo d-flex flex-wrap">
        {imgAry.map((v, i) => (
          <Card className="col-xl-3 col-sm-5 my-3" key={i} data-aos="zoom-in">
            <ImageLoader
              src={v}
              alt={`realTimeSpc${i}`}
              placeholder={placeholderAry[i]}
              onClick={() => {
                handleShow()
                handleSelect(i)
              }}
            />
          </Card>
        ))}
      </div>
      <div className="photo-mobile d-none" data-aos="zoom-in">
        <Carousel variant="dark" fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <Card className="col-md-9 col-sm-10 col-12 my-3">
                <ImageLoader
                  src={v}
                  alt={`realTimeSpc${i}`}
                  className={`card-img`}
                  placeholder={placeholderAry[i]}
                />
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <Carousel
          className="carousel-in-modal"
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <ImageLoader
                src={v}
                alt={`realTimeSpc${i}`}
                placeholder={placeholderAry[i]}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </section>
  )
}
const Section5 = (props) => {
  const { t } = props
  const imgAry = [
    calibration,
    calibration2,
    calibration3,
    calibration4,
    calibration5,
  ]
  const placeholderAry = [
    calibrationPlaceholder,
    calibration2Placeholder,
    calibration3Placeholder,
    calibration4Placeholder,
    calibration5Placeholder,
  ]
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const [range, setRange] = useState(0)
  useEffect(() => {
    handleSelect(range)
  }, [range])
  useEffect(() => {
    setRange(index)
  }, [index])
  return (
    <section className="labTestSection5" id="Calibration">
      <div className="title" data-aos="fade-right">
        <div className="d-flex">
          <p className="line">_________</p>
          <h3>{t('LabTest.Calibration.Title')}</h3>
        </div>
        <p className="description col-10">
          {t('LabTest.Calibration.Description')}
        </p>
      </div>
      <div className="content col-xl-6 col-md-9 col-sm-10 col-12">
        <Carousel
          variant="dark"
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          interval={2500}
          pause="false"
          fade
          data-aos="zoom-in"
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <section>
                <div className="photo p-3 pb-5">
                  <ImageLoader
                    src={v}
                    alt={`calibration${i}`}
                    placeholder={placeholderAry[i]}
                  />
                </div>
              </section>
            </Carousel.Item>
          ))}
        </Carousel>
        <div
          className="text-center my-4 col-sm-12 col-11 mx-auto"
          data-aos="fade-right"
        >
          <div className={`status-bar steps${range + 1}`}>
            {t('LabTest.Calibration.Step') + (range + 1)}
            <Form.Range
              min="0"
              max="4"
              steps="1"
              value={range}
              onChange={(e) => {
                setRange(parseInt(e.target.value))
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
function LabTest(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.LabTest.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('HeaderNavbar.LabTest.Title')} />
      </Helmet>
      <main>
        <Section1 t={t} />
        <Section2 t={t} />
        <Section3 t={t} />
        <Section4 t={t} />
        <Section5 t={t} />
      </main>
    </>
  )
}

export default withRouter(LabTest)

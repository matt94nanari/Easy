import React, { useEffect, useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import BannerButton from '../components/BannerButton'
import { Carousel, Modal, Form } from 'react-bootstrap'
import { GoLinkExternal } from 'react-icons/go'
import BackgroundImageLoader from '../components/BackgroundImageLoader'
import ImageLoader from '../components/ImageLoader'
import WindowWidth from '../components/WindowWidth'
import frontView from '../images/home/frontView.webp'
import frontViewPlaceholder from '../images/home/frontView-placeholder.webp'
import area1B2C from '../images/home/factoryArea-1B2C.webp'
import area1B2CPlaceholder from '../images/facility/factoryArea-1B2C-placeholder.webp'
import areaMSF from '../images/home/factoryArea-MSF.webp'
import areaMSFPlaceholder from '../images/facility/factoryArea-MSF-placeholder.webp'
import areaThread from '../images/home/factoryArea-Threading.webp'
import areaThreadPlaceholder from '../images/facility/factoryArea-Threading-placeholder.webp'
import areaSorting from '../images/home/factoryAreaSorting.webp'
import areaSortingPlaceholder from '../images/facility/factoryAreaSorting-placeholder.webp'
import screw from '../images/home/screw.webp'
import screwPlaceholder from '../images/home/screw-placeholder.webp'
import wireMaterial from '../images/home/wireMaterial.webp'
import wireMaterialPlaceholder from '../images/home/wireMaterial-placeholder.webp'
import opticalSorting1 from '../images/home/opticalSorting1.webp'
import opticalSorting1Placeholder from '../images/sorting/opticalSorting1-placeholder.webp'
import opticalSorting2 from '../images/home/opticalSorting2.webp'
import opticalSorting2Placeholder from '../images/sorting/opticalSorting2-placeholder.webp'
import vietnamFactory from '../images/home/vietnamFactory.webp'
import vietnamFactoryPlaceholder from '../images/home/vietnamFactory-placeholder.webp'
import ASRS1 from '../images/home/ASRS.webp'
import ASRS1Placeholder from '../images/packing/ASRS-placeholder.webp'
import ASRS2 from '../images/home/ASRS2.webp'
import ASRS2Placeholder from '../images/packing/ASRS2-placeholder.webp'
import ASRS3 from '../images/home/ASRS3.webp'
import ASRS3Placeholder from '../images/packing/ASRS3-placeholder.webp'
import Lab from '../images/home/lab.webp'
import LabPlaceholder from '../images/lab/lab-placeholder.webp'
import realTimeSpc2 from '../images/home/realTimeSpc2.webp'
import realTimeSpc2Placeholder from '../images/lab/realTimeSpc2-placeholder.webp'
import realTimeSpc4 from '../images/home/realTimeSpc4.webp'
import realTimeSpc4Placeholder from '../images/lab/realTimeSpc4-placeholder.webp'
import Packing from '../images/home/packing.webp'
import PackingPlaceholder from '../images/packing/packing-placeholder.webp'
import Packing3 from '../images/home/packing3.webp'
import Packing3Placeholder from '../images/packing/packing3-placeholder.webp'
import Packing4 from '../images/home/packing4.webp'
import Packing4Placeholder from '../images/packing/packing4-placeholder.webp'
import Tooling from '../images/home/tooling.webp'
import ToolingPlaceholder from '../images/tooling/tooling-placeholder.webp'
import toolingASRS from '../images/home/toolingASRS.webp'
import toolingASRSPlaceholder from '../images/tooling/toolingASRS-placeholder.webp'
import toolingASRS2 from '../images/home/toolingASRS2.webp'
import toolingASRS2Placeholder from '../images/tooling/toolingASRS2-placeholder.webp'
import slotting2 from '../images/home/factoryAreaHeadSlotting2.webp'
import slotting2Placeholder from '../images/facility/factoryAreaHeadSlotting2-placeholder.webp'
import IoT from '../images/home/IoT.webp'
import IoTPlaceholder from '../images/home/IoT-placeholder.webp'
import KanBan from '../images/home/KanBan.webp'
import KanBanPlaceholder from '../images/home/KanBan-placeholder.webp'
import Pressing from '../images/home/factoryArea-Pressing.webp'
import PressingPlaceholder from '../images/facility/factoryArea-Pressing-placeholder.webp'
import pressing2 from '../images/facility/pressing.webp'
import pressingPlaceholder2 from '../images/facility/pressing-placeholder.webp'
import assembling1 from '../images/home/assembling.webp'
import assembling1Placeholder from '../images/facility/assembling-placeholder.webp'
import assembling2 from '../images/home/assembling2.webp'
import assembling2Placeholder from '../images/home/assembling2-placeholder.webp'
import areaAssembling from '../images/home/factoryArea-Assembling.webp'
import areaAssemblingPlaceholder from '../images/facility/factoryArea-Assembling-placeholder.webp'
import areaTapping1 from '../images/home/factoryArea-Tapping.webp'
import areaTapping1Placeholder from '../images/facility/factoryArea-Tapping-placeholder.webp'
import areaTapping2 from '../images/home/factoryArea-Tapping2.webp'
import areaTapping2Placeholder from '../images/facility/factoryArea-Tapping2-placeholder.webp'

const Section1 = (props) => {
  const { t } = props
  const backgroundImage = BackgroundImageLoader(frontView)
  const ref = useRef(null)
  return (
    <section
      className={`homeSection1 ${props.darkenBackground ? 'show' : ''}`}
      style={{
        backgroundImage: `url(${backgroundImage || frontViewPlaceholder})`,
      }}
    >
      <BannerButton location={`right`} color={`white`}>
        {t('Home.Found')}
      </BannerButton>
      <div className="taiwan-factory">
        <p>{t('Home.TaiwanFactory')}</p>
      </div>
      <div className="link-area">
        <div className="vietnam-factory">
          <div className="photo" ref={ref}>
            <ImageLoader
              src={vietnamFactory}
              alt={`vietnamFactory`}
              placeholder={vietnamFactoryPlaceholder}
            />
          </div>
          <a
            href="http://www.easylink.com.tw/VN/home.html"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              ref.current.classList.add('show')
            }}
            onMouseLeave={() => {
              ref.current.classList.remove('show')
            }}
          >
            {t('Home.VietnamFactory')}
            <GoLinkExternal />
          </a>
        </div>
        <ul className="office d-flex flex-wrap">
          <li className="me-3">
            <a
              href="https://www.easylink-usa.com/"
              target="_blank"
              rel="noreferrer"
            >
              {t('Home.USOffice')} <GoLinkExternal />
            </a>
          </li>
          <li className="me-3">
            <a
              href="https://www.fabricatornillos.com/"
              target="_blank"
              rel="noreferrer"
            >
              {t('Home.MexicoOffice')} <GoLinkExternal />
            </a>
          </li>
          <li className="me-3">
            <a
              href="http://www.easylink.com.tw/ningbo"
              target="_blank"
              rel="noreferrer"
            >
              {t('Home.ChinaOffice')} <GoLinkExternal />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { t } = props
  const [width, height] = WindowWidth()
  useEffect(() => {
    if (width <= 991) {
      handleClose()
    }
  }, [width])
  const forging1 = [area1B2C, wireMaterial, screw]
  const forging2 = [areaMSF, IoT, KanBan]
  const threading = [areaThread, areaTapping1, areaTapping2]
  const secondaryOperation = [Pressing, pressing2, slotting2]
  const assembling = [areaAssembling, assembling1, assembling2]
  const tooling = [toolingASRS, toolingASRS2, Tooling]
  const sorting = [areaSorting, opticalSorting1, opticalSorting2]
  const lab = [Lab, realTimeSpc2, realTimeSpc4]
  const packing = [Packing, Packing3, Packing4]
  const ASRS = [ASRS1, ASRS2, ASRS3]
  const picsAll = [
    [...forging1],
    [...forging2],
    [...threading],
    [...secondaryOperation],
    [...assembling],
    [...tooling],
    [...sorting],
    [...lab],
    [...packing],
    [...ASRS],
  ]
  const placeholder = [
    [area1B2CPlaceholder, wireMaterialPlaceholder, screwPlaceholder],
    [areaMSFPlaceholder, IoTPlaceholder, KanBanPlaceholder],
    [areaThreadPlaceholder, areaTapping1Placeholder, areaTapping2Placeholder],
    [PressingPlaceholder, pressingPlaceholder2, slotting2Placeholder],
    [areaAssemblingPlaceholder, assembling1Placeholder, assembling2Placeholder],
    [toolingASRSPlaceholder, toolingASRS2Placeholder, ToolingPlaceholder],
    [
      areaSortingPlaceholder,
      opticalSorting1Placeholder,
      opticalSorting2Placeholder,
    ],
    [LabPlaceholder, realTimeSpc2Placeholder, realTimeSpc4Placeholder],
    [PackingPlaceholder, Packing3Placeholder, Packing4Placeholder],
    [ASRS1Placeholder, ASRS2Placeholder, ASRS3Placeholder],
  ]
  const picsAllMobile = [
    ...forging1,
    ...forging2,
    ...threading,
    ...secondaryOperation,
    ...assembling,
    ...tooling,
    ...sorting,
    ...lab,
    ...packing,
    ...ASRS,
  ]
  const placeholderMobile = [
    area1B2CPlaceholder,
    wireMaterialPlaceholder,
    screwPlaceholder,
    areaMSFPlaceholder,
    IoTPlaceholder,
    KanBanPlaceholder,
    areaThreadPlaceholder,
    areaTapping1Placeholder,
    areaTapping2Placeholder,
    PressingPlaceholder,
    pressingPlaceholder2,
    slotting2Placeholder,
    areaAssemblingPlaceholder,
    assembling1Placeholder,
    assembling2Placeholder,
    toolingASRSPlaceholder,
    toolingASRS2Placeholder,
    ToolingPlaceholder,
    areaSortingPlaceholder,
    opticalSorting1Placeholder,
    opticalSorting2Placeholder,
    LabPlaceholder,
    realTimeSpc2Placeholder,
    realTimeSpc4Placeholder,
    PackingPlaceholder,
    Packing3Placeholder,
    Packing4Placeholder,
    ASRS1Placeholder,
    ASRS2Placeholder,
    ASRS3Placeholder,
  ]
  const liAry = [
    t('Home.FactortArea.ForgingArea-1B2C'),
    t('Home.FactortArea.ForgingArea-MSF'),
    t('Home.FactortArea.Threading&TappingArea'),
    t('Home.FactortArea.Stamping&SecondaryOperationArea'),
    t('Home.FactortArea.AssemblingArea'),
    t('Home.FactortArea.ToolingASRSSystem'),
    t('Home.FactortArea.SortingArea'),
    t('Home.FactortArea.Lab'),
    t('Home.FactortArea.PackingArea'),
    t('Home.FactortArea.ASRS'),
  ]
  const carouselTitleMobileRef = useRef(null)
  const carouselTitleRef = useRef(null)
  const [carouselTitle, setCarouselTitle] = useState('')
  const [carouselTitleMobile, setCarouselTitleMobile] = useState('')
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [indexMobile, setIndexMobile] = useState(0)
  const handleSelectMobile = (selectedIndex) => {
    setIndexMobile(selectedIndex)
  }
  const [indexModal, setIndexModal] = useState(0)
  const handleSelectModal = (selectedIndex) => {
    setIndexModal(selectedIndex)
  }
  const [range, setRange] = useState(0)
  const [rangeMobile, setRangeMobile] = useState(0)
  useEffect(() => {
    handleSelect(range)
  }, [range])
  useEffect(() => {
    handleSelectMobile(rangeMobile)
  }, [rangeMobile])
  useEffect(() => {
    setRange(index)
    const liAry = [
      t('Home.FactortArea.ForgingArea-1B2C'),
      t('Home.FactortArea.ForgingArea-MSF'),
      t('Home.FactortArea.Threading&TappingArea'),
      t('Home.FactortArea.Stamping&SecondaryOperationArea'),
      t('Home.FactortArea.AssemblingArea'),
      t('Home.FactortArea.ToolingASRSSystem'),
      t('Home.FactortArea.SortingArea'),
      t('Home.FactortArea.Lab'),
      t('Home.FactortArea.PackingArea'),
      t('Home.FactortArea.ASRS'),
    ]
    switch (index) {
      case 0:
        setCarouselTitle(liAry[0])
        break
      case 1:
        setCarouselTitle(liAry[1])
        break
      case 2:
        setCarouselTitle(liAry[2])
        break
      case 3:
        setCarouselTitle(liAry[3])
        break
      case 4:
        setCarouselTitle(liAry[4])
        break
      case 5:
        setCarouselTitle(liAry[5])
        break
      case 6:
        setCarouselTitle(liAry[6])
        break
      case 7:
        setCarouselTitle(liAry[7])
        break
      case 8:
        setCarouselTitle(liAry[8])
        break
      case 9:
        setCarouselTitle(liAry[9])
        break
      default:
        setCarouselTitle(liAry[0])
        break
    }
    carouselTitleRef.current.classList.remove('show')
    setTimeout(() => {
      carouselTitleRef.current.classList.add('show')
    }, 500)
  }, [index, t])
  useEffect(() => {
    setRangeMobile(indexMobile)
    const liAry = [
      t('Home.FactortArea.ForgingArea-1B2C'),
      t('Home.FactortArea.ForgingArea-MSF'),
      t('Home.FactortArea.Threading&TappingArea'),
      t('Home.FactortArea.Stamping&SecondaryOperationArea'),
      t('Home.FactortArea.AssemblingArea'),
      t('Home.FactortArea.ToolingASRSSystem'),
      t('Home.FactortArea.SortingArea'),
      t('Home.FactortArea.Lab'),
      t('Home.FactortArea.PackingArea'),
      t('Home.FactortArea.ASRS'),
    ]
    switch (indexMobile) {
      case 0:
      case 1:
      case 2:
        setCarouselTitleMobile(liAry[0])
        break
      case 3:
      case 4:
      case 5:
        setCarouselTitleMobile(liAry[1])
        break
      case 6:
      case 7:
      case 8:
        setCarouselTitleMobile(liAry[2])
        break
      case 9:
      case 10:
      case 11:
        setCarouselTitleMobile(liAry[3])
        break
      case 12:
      case 13:
      case 14:
        setCarouselTitleMobile(liAry[4])
        break
      case 15:
      case 16:
      case 17:
        setCarouselTitleMobile(liAry[5])
        break
      case 18:
      case 19:
      case 20:
        setCarouselTitleMobile(liAry[6])
        break
      case 21:
      case 22:
      case 23:
        setCarouselTitleMobile(liAry[7])
        break
      case 24:
      case 25:
      case 26:
        setCarouselTitleMobile(liAry[8])
        break
      case 27:
      case 28:
      case 29:
        setCarouselTitleMobile(liAry[9])
        break
      default:
        setCarouselTitleMobile(liAry[0])
        break
    }
    carouselTitleMobileRef.current.classList.remove('show')
    setTimeout(() => {
      carouselTitleMobileRef.current.classList.add('show')
    }, 500)
  }, [indexMobile, t])
  useEffect(() => {
    const liAry = [
      t('Home.FactortArea.ForgingArea-1B2C'),
      t('Home.FactortArea.ForgingArea-MSF'),
      t('Home.FactortArea.Threading&TappingArea'),
      t('Home.FactortArea.Stamping&SecondaryOperationArea'),
      t('Home.FactortArea.AssemblingArea'),
      t('Home.FactortArea.ToolingASRSSystem'),
      t('Home.FactortArea.SortingArea'),
      t('Home.FactortArea.Lab'),
      t('Home.FactortArea.PackingArea'),
      t('Home.FactortArea.ASRS'),
    ]
    switch (indexModal) {
      case 0:
      case 1:
      case 2:
        setCarouselTitleMobile(liAry[0])
        break
      case 3:
      case 4:
      case 5:
        setCarouselTitleMobile(liAry[1])
        break
      case 6:
      case 7:
      case 8:
        setCarouselTitleMobile(liAry[2])
        break
      case 9:
      case 10:
      case 11:
        setCarouselTitleMobile(liAry[3])
        break
      case 12:
      case 13:
      case 14:
        setCarouselTitleMobile(liAry[4])
        break
      case 15:
      case 16:
      case 17:
        setCarouselTitleMobile(liAry[5])
        break
      case 18:
      case 19:
      case 20:
        setCarouselTitleMobile(liAry[6])
        break
      case 21:
      case 22:
      case 23:
        setCarouselTitleMobile(liAry[7])
        break
      case 24:
      case 25:
      case 26:
        setCarouselTitleMobile(liAry[8])
        break
      case 27:
      case 28:
      case 29:
        setCarouselTitleMobile(liAry[9])
        break
      default:
        setCarouselTitleMobile(liAry[0])
        break
    }
    carouselTitleMobileRef.current.classList.remove('show')
    setTimeout(() => {
      carouselTitleMobileRef.current.classList.add('show')
    }, 500)
  }, [indexModal, t])
  const handleClick = (i) => {
    handleShow()
    handleSelectModal(i * 3)
  }
  const handleClick2 = (i) => {
    handleShow()
    handleSelectModal(i * 3 + 1)
  }
  const handleClick3 = (i) => {
    handleShow()
    handleSelectModal(i * 3 + 2)
  }
  return (
    <div className="homeSection2 d-flex flex-wrap">
      <div>
        <div className="col-md-9 col-sm-10 col-12 carousel-mobile d-none mx-auto">
          <Carousel
            controls={false}
            indicators={false}
            interval={2500}
            fade
            activeIndex={indexMobile}
            onSelect={handleSelectMobile}
            pause="false"
          >
            {picsAllMobile.map((v, i) => (
              <Carousel.Item key={i} className="p-2">
                <div data-aos="zoom-in">
                  <ImageLoader
                    src={v}
                    alt={`pics${i + 2}`}
                    placeholder={placeholderMobile[i]}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div
          className="text-center col-md-9 col-sm-10 col-12 mx-auto carousel-indicators-mobile d-none"
          data-aos="fade-right"
        >
          <div
            ref={carouselTitleMobileRef}
            className={`status-bar area${rangeMobile + 1}`}
          >
            {carouselTitleMobile}
            {' ' + (rangeMobile + 1).toString() + '/' + picsAllMobile.length}
            <Form.Range
              min="0"
              max="29"
              steps="1"
              value={rangeMobile}
              onChange={(e) => {
                setRangeMobile(parseInt(e.target.value))
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-desk">
          <Carousel
            controls={false}
            interval={3000}
            indicators={false}
            fade
            activeIndex={index}
            onSelect={handleSelect}
            pause="false"
          >
            {picsAll.map((v, i) => (
              <Carousel.Item key={i} className="factoryPics d-flex">
                <div className="photo1 p-3 col-4" data-aos="zoom-in">
                  <ImageLoader
                    src={v[0]}
                    alt={`${liAry[i] + ' ' + 1}`}
                    placeholder={placeholder[i][0]}
                    onClick={() => {
                      handleClick(i)
                    }}
                    className={`${liAry[i].split(' ')[0] + 1}`}
                  />
                </div>
                <div className="photo2 p-3 col-4" data-aos="zoom-in">
                  <ImageLoader
                    src={v[1]}
                    alt={`${liAry[i] + ' ' + 2}`}
                    placeholder={placeholder[i][1]}
                    onClick={() => {
                      handleClick2(i)
                    }}
                    className={`mb-4 ${liAry[i].split(' ')[0] + 2}`}
                  />
                </div>
                <div className="photo3 p-3 col-4" data-aos="zoom-in">
                  <ImageLoader
                    src={v[2]}
                    alt={`${liAry[i] + ' ' + 3}`}
                    placeholder={placeholder[i][2]}
                    onClick={() => {
                      handleClick3(i)
                    }}
                    className={`${liAry[i].split(' ')[0] + 3}`}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div
          className="text-center my-3 col-7 mx-auto carousel-options"
          data-aos="fade-right"
        >
          <div ref={carouselTitleRef} className={`status-bar area${range + 1}`}>
            {carouselTitle}
            {' ' + (range + 1).toString() + '/' + picsAll.length}
            <Form.Range
              min="0"
              max="9"
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
          className="carousel-in-modal home"
          indicators={false}
          activeIndex={indexModal}
          onSelect={handleSelectModal}
          fade
        >
          {picsAllMobile.map((v, i) => (
            <Carousel.Item key={i}>
              <ImageLoader
                src={v}
                alt={`${liAry[i + 1] + ' ' + (i + 1)} `}
                placeholder={placeholderMobile[i]}
              />
              <div className="text">
                <p>{carouselTitleMobile}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </div>
  )
}
const SectionText = (props) => {
  const { t } = props
  return (
    <section className="homeSectionText d-flex flex-wrap justify-content-between">
      <div className="description col-lg-6">
        <div className="frame" data-aos="fade-right">
          <h1>
            <span className="lightGreen">
              {t('Home.Description').split('#')[0]}
            </span>
            {t('Home.Description').split('#')[1]}
            <span className="lightGreen">
              {t('Home.Description').split('#')[2]}
            </span>
            {t('Home.Description').split('#')[3]}
            <span className="lightGreen">
              {t('Home.Description').split('#')[4]}
            </span>
          </h1>
        </div>
        <div className="frame" data-aos="fade-right">
          <h5>
            {t('Home.Description2').split('#')[0]}
            <span className="lightGreen">
              {t('Home.Description2').split('#')[1]}
            </span>
          </h5>
          <ul className="readMore">
            <li className="full-text">{t('Home.List1')}</li>
            <li className="full-text">{t('Home.List2')}</li>
            <li className="full-text">{t('Home.List3')}</li>
            <li className="full-text">{t('Home.List4')}</li>
            <li className="full-text">{t('Home.List5')}</li>
            <li className="full-text">{t('Home.List6')}</li>
            <li className="full-text">{t('Home.List7')}</li>
            <li className="full-text">{t('Home.List8')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
function Home(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>{t('Home.HTMLTitle')}</title>
        <meta property="og:title" content={t('Home.HTMLTitle')} />
      </Helmet>
      <main>
        <Section1
          showLoader={props.showLoader}
          setShowLoader={props.setShowLoader}
          darkenBackground={props.darkenBackground}
          t={t}
        />
        <Section2 setShowLoader={props.setShowLoader} t={t} />
        <SectionText t={t} />
      </main>
    </>
  )
}

export default withRouter(Home)

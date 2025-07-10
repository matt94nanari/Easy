import { useEffect, useState, useRef } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter, Link } from 'react-router-dom'
import { Carousel, Modal, Form } from 'react-bootstrap'
import Title from '../components/Title'
import ImageLoader from '../components/ImageLoader'
import QRCode from '../images/productionControl/QRCode.webp'
import QRCodePlaceholder from '../images/productionControl/QRCode-placeholder.webp'
import IoT from '../images/productionControl/IoT.webp'
import IoTPlaceholder from '../images/productionControl/IoT-placeholder.webp'
import KanBan from '../images/productionControl/KanBan.webp'
import KanBanPlaceholder from '../images/productionControl/KanBan-placeholder.webp'
import SituationInformation from '../images/productionControl/situationInformation.webp'
import SituationInformationPlaceholder from '../images/productionControl/situationInformation-placeholder.webp'
import RealTimeSpc from '../images/productionControl/realTimeSpcWithTitle.webp'
import RealTimeSpcPlaceholder from '../images/productionControl/realTimeSpcWithTitle-placeholder.webp'
import productLiability from '../images/quality/productLiability.webp'
import placeholder from '../images/other/placeholder2.webp'
import recall from '../images/quality/recall.webp'
import Recall from '../files/Risk/recall.png'
import ProductLiability from '../files/Risk/productLiability.pdf'
import { GoLinkExternal } from 'react-icons/go'
const Section1 = (props) => {
  const { t } = props
  const liAry = [
    t('ProductionControlManagement.Content').split('#')[0],
    t('ProductionControlManagement.Content').split('#')[1],
    t('ProductionControlManagement.Content').split('#')[2],
    t('ProductionControlManagement.Content').split('#')[3],
    t('ProductionControlManagement.Content').split('#')[4],
    t('ProductionControlManagement.Content').split('#')[5],
  ]
  return (
    <section className="productionManageMentControlSectionText" id="Management">
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('ProductionControlManagement.Title')}
      </BannerButton>
      <div className="textArea">
        <Title
          text={'#' + t('ProductionControlManagement.Title')}
          justifyContent={`justify-content-center`}
          col={`col-lg-8 col-sm-10`}
        />
        <div className="content">
          <ol className="description col-lg-8 col-sm-10 my-3">
            {liAry.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { t } = props
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const [range, setRange] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    handleSelect(range)
  }, [range])
  useEffect(() => {
    setRange(index)
  }, [index])
  const title = [
    t('ProductionControlManagement.PhotoDescription.QRCodeScanning'),
    t('ProductionControlManagement.PhotoDescription.IoTSystem'),
    t('ProductionControlManagement.PhotoDescription.KanBanSystem'),
    t('ProductionControlManagement.PhotoDescription.SituationInformation'),
    t('ProductionControlManagement.PhotoDescription.RealTimeSPC'),
  ]
  const imgAry = [QRCode, IoT, KanBan, SituationInformation, RealTimeSpc]
  const placeholderAry = [
    QRCodePlaceholder,
    IoTPlaceholder,
    KanBanPlaceholder,
    SituationInformationPlaceholder,
    RealTimeSpcPlaceholder,
  ]
  return (
    <section
      className="productionManageMentControlSectionPhoto"
      data-aos="zoom-in"
    >
      <div className="content">
        <Carousel
          variant="dark"
          indicators={false}
          activeIndex={index}
          interval={3000}
          pause="false"
          onSelect={handleSelect}
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <section>
                <div className="photo col-xl-6 col-lg-8 col-md-8 col-sm-10 col-12 mx-auto text-center">
                  <ImageLoader
                    src={v}
                    alt={`pic${i}`}
                    placeholder={placeholderAry[i]}
                  />
                </div>
              </section>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center my-3 col-xl-6 col-lg-8 col-md-8 col-sm-10 col-11 mx-auto">
          <div ref={ref} className={`status-bar steps${range + 1}`}>
            {title[range]}
            {' ' + (range + 1).toString() + '/' + imgAry.length}
            <Form.Range
              min="0"
              max="5"
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
const Section3 = (props) => {
  const { t } = props
  return (
    <section className="qualityAssuranceSection1" id="ProductionProcedure">
      <div className="content">
        <div
          className="d-flex justify-content-around flex-wrap"
          data-aos="fade-left"
        >
          <div className="one col-sm-2 col-3">
            <p className="box">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.CustomerRequirement'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.CustomerRequirement'
                ).split('-')[1]
              }
            </p>
          </div>
          <div className="two col-sm-2 col-3">
            <Link to="/production-control-management/APQP" className="box">
              APQP &nbsp;
              <GoLinkExternal />
              <br />
              {t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Hint'
              )}
            </Link>
          </div>
          <div className="three col-sm-2 col-3">
            <Link to="/production-control-management/PPAP" className="box">
              PPAP &nbsp;
              <GoLinkExternal />
              <br />
              {t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Hint'
              )}
            </Link>
          </div>
          <div className="four col-sm-2 col-3">
            <p className="box2">
              {t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Order'
              )}
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-around flex-wrap"
          data-aos="fade-right"
        >
          <div className="five col-sm-2 col-3">
            <p className="box3">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ShipmentReceivedbyCustomer'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ShipmentReceivedbyCustomer'
                ).split('-')[1]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ShipmentReceivedbyCustomer'
                ).split('-')[2]
              }
            </p>
          </div>
          <div className="six col-sm-2 col-3"></div>
          <div className="seven col-sm-2 col-3"></div>
          <div className="eight col-sm-2 col-3">
            <p className="box">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ContractReview'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ContractReview'
                ).split('-')[1]
              }
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-around flex-wrap"
          data-aos="fade-left"
        >
          <div className="nine col-sm-2 col-3">
            <p className="box">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ShippingAssessment'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.ShippingAssessment'
                ).split('-')[1]
              }
            </p>
          </div>
          <div className="ten col-sm-2 col-3"></div>
          <div className="eleven col-sm-2 col-3"></div>
          <div className="twelve col-sm-2 col-3">
            <p className="box2">
              {t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Production'
              )}
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-around flex-wrap"
          data-aos="fade-right"
        >
          <div className="thridteen col-sm-2 col-3">
            <p className="box2">
              {t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Shipment'
              )}
            </p>
          </div>
          <div className="fourteen col-sm-2 col-3">
            <p className="box3">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.PackageTransportStorage'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.PackageTransportStorage'
                ).split('-')[1]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.PackageTransportStorage'
                ).split('-')[2]
              }
            </p>
          </div>
          <div className="fifteen col-sm-2 col-3">
            <p className="box3">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.FinalQualityControl'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.FinalQualityControl'
                ).split('-')[1]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.FinalQualityControl'
                ).split('-')[2]
              }
            </p>
          </div>
          <div className="sixteen col-sm-2 col-3">
            <p className="box3">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.InProcessQualityControl'
                ).split('-')[0]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.InProcessQualityControl'
                ).split('-')[1]
              }
              <br />
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.InProcessQualityControl'
                ).split('-')[2]
              }
            </p>
          </div>
        </div>
        <div className="title" data-aos="zoom-in">
          <h1>
            {
              t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
              ).split('-')[0]
            }
            <span className="lightGreen">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
                ).split('-')[1]
              }
            </span>
            <br />
            {
              t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
              ).split('-')[2]
            }
            <span className="lightGreen">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
                ).split('-')[3]
              }
            </span>
            {
              t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
              ).split('-')[4]
            }
          </h1>
        </div>
      </div>
      <div className="content-mobile d-none">
        <div className="title" data-aos="zoom-in">
          <h1>
            {
              t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
              ).split('-')[0]
            }
            <span className="lightGreen">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
                ).split('-')[1]
              }
            </span>
            <br />
            {
              t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
              ).split('-')[2]
            }
            <span className="lightGreen">
              {
                t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
                ).split('-')[3]
              }
            </span>
            {
              t(
                'ProductionControlManagement.ProductionProcedurePPAPParts.Title'
              ).split('-')[4]
            }
          </h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center px-2">
          <div
            className="d-flex flex-wrap flex-column align-items-center col-6"
            data-aos="fade-right"
          >
            <div className="one">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.CustomerRequirement'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.CustomerRequirement'
                  ).split('-')[1]
                }
              </p>
            </div>
            <div className="two">
              <Link to="/production-control-management/APQP">
                <p className="box">
                  APQP &nbsp;
                  <GoLinkExternal />
                  <br />{' '}
                  {t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.Hint'
                  )}
                </p>
              </Link>
            </div>
            <div className="three">
              <Link to="/production-control-management/PPAP">
                <p className="box">
                  PPAP &nbsp;
                  <GoLinkExternal />
                  <br />
                  <span>
                    {t(
                      'ProductionControlManagement.ProductionProcedurePPAPParts.Hint'
                    )}
                  </span>
                </p>
              </Link>
            </div>
            <div className="four">
              <p className="box">
                {t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Order'
                )}
              </p>
            </div>
            <div className="five">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ContractReview'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ContractReview'
                  ).split('-')[1]
                }
              </p>
            </div>
            <div className="six">
              <p className="box">
                {t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Production'
                )}
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-wrap flex-column align-items-center col-6"
            data-aos="fade-left"
          >
            <div className="twelve">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ShipmentReceivedbyCustomer'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ShipmentReceivedbyCustomer'
                  ).split('-')[1]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ShipmentReceivedbyCustomer'
                  ).split('-')[2]
                }
              </p>
            </div>
            <div className="eleven">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ShippingAssessment'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.ShippingAssessment'
                  ).split('-')[1]
                }
              </p>
            </div>
            <div className="ten">
              <p className="box">
                {t(
                  'ProductionControlManagement.ProductionProcedurePPAPParts.Shipment'
                )}
              </p>
            </div>
            <div className="nine">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.PackageTransportStorage'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.PackageTransportStorage'
                  ).split('-')[1]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.PackageTransportStorage'
                  ).split('-')[2]
                }
              </p>
            </div>
            <div className="eight">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.FinalQualityControl'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.FinalQualityControl'
                  ).split('-')[1]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.FinalQualityControl'
                  ).split('-')[2]
                }
              </p>
            </div>
            <div className="seven">
              <p className="box">
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.InProcessQualityControl'
                  ).split('-')[0]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.InProcessQualityControl'
                  ).split('-')[1]
                }
                <br />
                {
                  t(
                    'ProductionControlManagement.ProductionProcedurePPAPParts.InProcessQualityControl'
                  ).split('-')[2]
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Section4 = (props) => {
  const { t } = props
  // const imgAry = [productLiability, productLiability2, productLiability3]
  const imgAry = [productLiability]
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  // const handleShow2 = () => setShow2(true)

  const [index, setIndex] = useState(0)
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex)
  // }

  return (
    <section className="qualityAssuranceSection2" id="RiskManagement">
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('ProductionControlManagement.RiskManagement.Title')}
      </BannerButton>
      <Title
        text={t('ProductionControlManagement.RiskManagement.Title2')}
        col={`col-12`}
        aos={`zoom-in`}
      />
      <div className="photo d-flex justify-content-evenly flex-wrap">
        <div className="col-lg-3" data-aos="fade-right">
          {/* <Carousel
            controls={false}
            variant="dark"
            interval={5000}
            fade
            pause="false"
          >
            {imgAry.map((v, i) => (
              <Carousel.Item key={i}>
                <ImageLoader
                  src={v}
                  alt={`productLiability${i + 1}`}
                  placeholder={placeholder}
                  onClick={() => {
                    handleShow()
                    handleSelect(i)
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel> */}
          <a href={ProductLiability} target="_blank" rel="noreferrer noopener">
            <ImageLoader
              src={productLiability}
              alt={`productLiability`}
              placeholder={placeholder}
            />
          </a>
          <h3 className="text">
            {t('ProductionControlManagement.RiskManagement.ProductLiability')}
          </h3>
        </div>
        <div className="col-lg-3" data-aos="fade-left">
          {/* <ImageLoader
            src={recall}
            alt={`recall`}
            placeholder={placeholder}
            onClick={() => {
              handleShow2()
            }}
          /> */}
          <a href={Recall} target="_blank" rel="noreferrer noopener">
            <ImageLoader
              src={recall}
              alt={`recall`}
              placeholder={placeholder}
            />
          </a>
          <h3 className="text">
            {t('ProductionControlManagement.RiskManagement.RecallInsurance')}
          </h3>
        </div>
      </div>
      <div className="photo-mobile d-none" data-aos="zoom-in">
        <Carousel variant="dark" fade pause="false">
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <div className="col-md-5 col-sm-7 col-8">
                {/* <ImageLoader
                  src={v}
                  alt={`productLiability${i + 1}`}
                  placeholder={placeholder}
                  onClick={() => {
                    handleShow()
                    handleSelect(i)
                  }}
                /> */}
                <a
                  href={ProductLiability}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ImageLoader
                    src={productLiability}
                    alt={`productLiability`}
                    placeholder={placeholder}
                  />
                </a>
                <h3 className="text">
                  {t(
                    'ProductionControlManagement.RiskManagement.ProductLiability'
                  )}
                </h3>
              </div>
            </Carousel.Item>
          ))}
          <Carousel.Item>
            <div className="col-md-5 col-sm-7 col-8">
              {/* <ImageLoader
                src={recall}
                alt={`recall`}
                placeholder={placeholder}
                onClick={() => {
                  handleShow2()
                }}
              /> */}
              <a href={Recall} target="_blank" rel="noreferrer noopener">
                <ImageLoader
                  src={recall}
                  alt={`recall`}
                  placeholder={placeholder}
                />
              </a>
              <h3 className="text">
                {t(
                  'ProductionControlManagement.RiskManagement.RecallInsurance'
                )}
              </h3>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <ImageLoader
          alt={`productLiability`}
          src={productLiability}
          placeholder={placeholder}
        />
        <div className="text">
          <p>
            {t('ProductionControlManagement.RiskManagement.ProductLiability')}
          </p>
        </div>
        {/* <Carousel
          className="carousel-in-modal"
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <ImageLoader
                alt={`productLiability${i + 1}`}
                src={v}
                placeholder={placeholder}
              />
              <div>
                <p className="text">
                  {t(
                    'ProductionControlManagement.RiskManagement.ProductLiability'
                  )}
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
      </Modal>
      <Modal show={show2} onHide={handleClose2} size="md" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <ImageLoader src={recall} alt={`recall`} placeholder={placeholder} />
        <div className="text">
          <p>
            {t('ProductionControlManagement.RiskManagement.RecallInsurance')}
          </p>
        </div>
      </Modal>
    </section>
  )
}
function ProductionControlManagement(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.ProductionControlManagement.Title')} |{' '}
          {t('Home.HTMLTitle')}
        </title>
        <meta
          property="og:title"
          content={t('HeaderNavbar.ProductionControlManagement.Title')}
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

export default withRouter(ProductionControlManagement)

import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Image, Carousel, Modal } from 'react-bootstrap'
import Title from '../components/Title'
import ImageLoader from '../components/ImageLoader'
import SectionRight from '../components/SectionRight'
import PDF from '../images/other/PDF.webp'
import tooling1 from '../images/tooling/tooling.webp'
import tooling1Placeholder from '../images/tooling/tooling-placeholder.webp'
import tooling2 from '../images/tooling/toolingManufacturing.webp'
import tooling2Placeholder from '../images/tooling/toolingManufacturing-placeholder.webp'
import tooling3 from '../images/tooling/toolingManufacturing2.webp'
import tooling3Placeholder from '../images/tooling/toolingManufacturing2-placeholder.webp'
import tooling4 from '../images/tooling/toolingMSF.webp'
import tooling4Placeholder from '../images/tooling/toolingMSF-placeholder.webp'
import tooling5 from '../images/tooling/toolingMSF2.webp'
import tooling5Placeholder from '../images/tooling/toolingMSF2-placeholder.webp'
import tooling6 from '../images/tooling/tooling1B2C.webp'
import tooling6Placeholder from '../images/tooling/tooling1B2C-placeholder.webp'
import tooling7 from '../images/tooling/tooling1B2C2.webp'
import tooling7Placeholder from '../images/tooling/tooling1B2C2-placeholder.webp'
import ASRS from '../images/tooling/toolingASRS.webp'
import ASRSPlaceholder from '../images/tooling/toolingASRS-placeholder.webp'
import ASRS2 from '../images/tooling/toolingASRS2.webp'
import ASRS2Placeholder from '../images/tooling/toolingASRS2-placeholder.webp'
import ToolingStepFormingDrawing from '../files/Tooling/ToolingStepFormingDrawing.pdf'
import VerifiedToolingDrawing from '../files/Tooling/VerifiedToolingDrawing.pdf'
const Section1 = (props) => {
  const { t } = props
  const imgAry = [
    tooling1,
    tooling2,
    tooling3,
    tooling4,
    tooling5,
    tooling6,
    tooling7,
  ]
  const placeholderAry = [
    tooling1Placeholder,
    tooling2Placeholder,
    tooling3Placeholder,
    tooling4Placeholder,
    tooling5Placeholder,
    tooling6Placeholder,
    tooling7Placeholder,
  ]
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  return (
    <section
      className="toolingSection1 d-flex justify-content-between flex-wrap"
      id="ToolingManufacture"
    >
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('Tooling.Title')}
      </BannerButton>
      <div className="col-lg-5 textArea">
        <Title text={t('Tooling.ToolingManufacture.Title')} />
        <div className="content">
          <p>
            {t('Tooling.ToolingManufacture.Content').split('-')[0]}
            <br />
            {t('Tooling.ToolingManufacture.Content').split('-')[1]}
          </p>
          <h2>
            <span className="lightGreen">
              {t('Tooling.ToolingManufacture.MainPurposes.Title').split('-')[0]}
            </span>{' '}
            {t('Tooling.ToolingManufacture.MainPurposes.Title').split('-')[1]}
          </h2>
          <ol className="col-12">
            <li>
              {
                t('Tooling.ToolingManufacture.MainPurposes.Content').split(
                  '#'
                )[1]
              }
            </li>
            <li>
              {
                t('Tooling.ToolingManufacture.MainPurposes.Content').split(
                  '#'
                )[2]
              }
            </li>
            <li>
              {
                t('Tooling.ToolingManufacture.MainPurposes.Content').split(
                  '#'
                )[3]
              }
            </li>
          </ol>
          <div className="file">
            <h2>
              {t('Tooling.ToolingManufacture.ToolingDrawing.Title')}
              <span>{t('Tooling.ToolingManufacture.ToolingDrawing.Hint')}</span>
            </h2>
            <div className="d-flex">
              <div className="col-5 mx-1">
                <a
                  href={ToolingStepFormingDrawing}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t(
                    'Tooling.ToolingManufacture.ToolingDrawing.ToolingStepFormingDrawing'
                  )}
                  <br />
                  <Image src={PDF} alt="ToolingStepFormingDrawing" fluid />
                </a>
              </div>
              <div className="col-5 mx-1">
                <a
                  href={VerifiedToolingDrawing}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t(
                    'Tooling.ToolingManufacture.ToolingDrawing.VerifiedToolingDrawing'
                  )}
                  <br />
                  <Image src={PDF} alt="VerifiedToolingDrawing" fluid />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 d-flex align-self-center justify-content-center photo mx-auto">
        <Carousel variant="dark" interval={5000} fade>
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <ImageLoader
                src={v}
                placeholder={placeholderAry[i]}
                alt={`toolingManufacture${i + 1}`}
                onClick={() => {
                  handleShow()
                  handleSelect(i)
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <Carousel
          className="carousel-in-modal home"
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <ImageLoader
                src={v}
                placeholder={placeholderAry[i]}
                alt={`toolingManufacture${i + 1}`}
              />
              <div>
                <p className="text">{t('Tooling.ToolingManufacture.Title2')}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </section>
  )
}
function Tooling(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('Tooling.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('Tooling.Title')} />
      </Helmet>
      <main>
        <Section1 t={t} />
        <SectionRight
          section={`toolingSection2`}
          id={`ToolingManagement`}
          image1={ASRS}
          image2={ASRS2}
          imageName1={`ASRS`}
          imageName2={`ASRS2`}
          placeholder1={ASRSPlaceholder}
          placeholder2={ASRS2Placeholder}
          title={t('Tooling.ToolingManagement.Title')}
          description={t('Tooling.ToolingManagement.Content')}
        />
      </main>
    </>
  )
}

export default withRouter(Tooling)

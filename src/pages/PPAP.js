import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import Title from '../components/Title'
import { Carousel, Form } from 'react-bootstrap'
import ImageLoader from '../components/ImageLoader'
import checkList from '../images/apqp&ppap/checkList.webp'
import diagram from '../images/apqp&ppap/diagram.webp'
import fmea from '../images/apqp&ppap/FMEA.webp'
import cp from '../images/apqp&ppap/CP.webp'
import gageRR from '../images/apqp&ppap/GageR&R.webp'
import spc from '../images/apqp&ppap/SPC.webp'
import checkListPlaceholder from '../images/apqp&ppap/checkList-placeholder.webp'
import diagramPlaceholder from '../images/apqp&ppap/diagram-placeholder.webp'
import fmeaPlaceholder from '../images/apqp&ppap/FMEA-placeholder.webp'
import cpPlaceholder from '../images/apqp&ppap/CP-placeholder.webp'
import gageRRPlaceholder from '../images/apqp&ppap/GageR&R-placeholder.webp'
import spcPlaceholder from '../images/apqp&ppap/SPC-placeholder.webp'
import Checklist from '../files/PPAP/CheckList.pdf'
import Diagram from '../files/PPAP/Diagram.pdf'
import CP from '../files/PPAP/CP.pdf'
import FMEA from '../files/PPAP/FMEA.pdf'
import SPC from '../files/PPAP/SPC.pdf'
import GageRR from '../files/PPAP/GageR&R.pdf'
const Section1 = (props) => {
  const { t } = props
  return (
    <section className="ppapSection1">
      <BannerButton color={`darkGreen`} location={`left`}>
        PPAP
      </BannerButton>
      <div className="textArea">
        <Title
          text={t('PPAP.Title')}
          justifyContent={`justify-content-center`}
          col={`col-lg-7 col-sm-10 col-12`}
        />
        <div className="content">
          <p className="description col-lg-7 col-sm-10">{t('PPAP.Content')}</p>
        </div>
      </div>
    </section>
  )
}
const Section2 = (props) => {
  const { t } = props
  const imgAry = [checkList, diagram, fmea, cp, gageRR, spc]
  const placeholderAry = [
    checkListPlaceholder,
    diagramPlaceholder,
    fmeaPlaceholder,
    cpPlaceholder,
    gageRRPlaceholder,
    spcPlaceholder,
  ]
  const titleAry = [
    t('PPAP.Checklist'),
    t('PPAP.Diagram'),
    t('PPAP.FailureModuleEffectsAnalysis'),
    t('PPAP.ControlPlan'),
    t('PPAP.GageR&R'),
    t('PPAP.SPC'),
  ]
  const fileAry = [Checklist, Diagram, FMEA, CP, GageRR, SPC]
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
    <section className="ppapSection2">
      <div className="content" data-aos="zoom-in">
        <Carousel
          variant="dark"
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          pause="false"
          fade
        >
          {imgAry.map((v, i) => (
            <Carousel.Item key={i}>
              <section>
                <div className="photo">
                  <a
                    href={fileAry[i]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ImageLoader
                      src={v}
                      alt={`PPAP${i}`}
                      placeholder={placeholderAry[i]}
                    />
                  </a>
                </div>
              </section>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center my-3 col-lg-6 col-sm-8 col-10 mx-auto">
          <div className={`status-bar steps${range + 1}`}>
            {titleAry[range]}
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
function PPAP(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>PPAP | {t('Home.HTMLTitle')}</title>
        <meta property="og:title" content="PPAP" />
      </Helmet>
      <main>
        <Section1 t={t} />
        <Section2 t={t} />
      </main>
    </>
  )
}

export default withRouter(PPAP)

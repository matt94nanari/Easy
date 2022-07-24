import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import Title from '../components/Title'
import { Form, Carousel } from 'react-bootstrap'
import ImageLoader from '../components/ImageLoader'
import apqpSchdule from '../images/apqp&ppap/apqpSchdule.webp'
import apqpSchdulePlaceholder from '../images/apqp&ppap/apqpSchdule-placeholder.webp'
import apqpSpreadOut from '../images/apqp&ppap/apqpSpreadOut.webp'
import apqpSpreadOutPlaceholder from '../images/apqp&ppap/apqpSpreadOut-placeholder.webp'
import apqpMeetingRecord from '../images/apqp&ppap/apqpMeetingRecord.webp'
import apqpMeetingRecordPlaceholder from '../images/apqp&ppap/apqpMeetingRecord-placeholder.webp'
import verifiedToolingDrawing1 from '../images/apqp&ppap/verifiedToolingDrawing-1.webp'
import verifiedToolingDrawing1Placeholder from '../images/apqp&ppap/verifiedToolingDrawing-1-placeholder.webp'
import packagingProposalSheet from '../images/apqp&ppap/packagingProposalSheet.webp'
import packagingProposalSheetPlaceholder from '../images/apqp&ppap/packagingProposalSheet-placeholder.webp'
import diagram from '../images/apqp&ppap/diagram.webp'
import diagramPlaceholder from '../images/apqp&ppap/diagram-placeholder.webp'
import fmea from '../images/apqp&ppap/FMEA.webp'
import fmeaPlaceholder from '../images/apqp&ppap/FMEA-placeholder.webp'
import cp from '../images/apqp&ppap/CP.webp'
import cpPlaceholder from '../images/apqp&ppap/CP-placeholder.webp'
import capacityEvaluation from '../images/apqp&ppap/capacityEvaluation.webp'
import capacityEvaluationPlaceholder from '../images/apqp&ppap/capacityEvaluation-placeholder.webp'
import apqpCheckList from '../images/apqp&ppap/apqpCheckList.webp'
import apqpCheckListPlaceholder from '../images/apqp&ppap/apqpCheckList-placeholder.webp'
import ProductQualityPlanningSummaryandApprovals from '../images/apqp&ppap/productQualityPlanningSummaryandApprovals.webp'
import ProductQualityPlanningSummaryandApprovalsPlaceholder from '../images/apqp&ppap/productQualityPlanningSummaryandApprovals-placeholder.webp'
import EngineeringChangeNotices from '../images/apqp&ppap/engineeringChangeNotices.webp'
import EngineeringChangeNoticesPlaceholder from '../images/apqp&ppap/engineeringChangeNotices-placeholder.webp'
import feasibilityAssessment from '../images/apqp&ppap/feasibilityAssessment.webp'
import feasibilityAssessmentPlaceholder from '../images/apqp&ppap/feasibilityAssessment-placeholder.webp'
import apqpHandover from '../images/apqp&ppap/apqpHandover.webp'
import apqpHandoverPlaceholder from '../images/apqp&ppap/apqpHandover-placeholder.webp'
import APQPSchdule from '../files/APQP/apqpSchdule.pdf'
import Diagram from '../files/PPAP/Diagram.pdf'
import CP from '../files/PPAP/CP.pdf'
import FMEA from '../files/PPAP/FMEA.pdf'
import APQPSpreadOut from '../files/APQP/apqpSpreadOut.pdf'
import APQPMeetingRecord from '../files/APQP/apqpMeetingRecord.pdf'
import VerifiedToolingDrawing from '../files/APQP/verifiedToolingDrawing.pdf'
import PackagingProposalSheet from '../files/APQP/packagingProposalSheet.pdf'
import CapacityEvaluation from '../files/APQP/capacityEvaluation.pdf'
import APQPCheckList from '../files/APQP/apqpCheckList.pdf'
import APQPSampleReport from '../files/APQP/apqpSampleReport.pdf'
import ProcessChange from '../files/APQP/processChange.pdf'
import FeasibilityAssessment from '../files/APQP/feasibilityAssessment.pdf'
import APQPHandover from '../files/APQP/apqpHandover.pdf'

const Section1 = (props) => {
  const { t } = props
  return (
    <section className="apqpSection1">
      <BannerButton color={`darkGreen`} location={`left`}>
        APQP
      </BannerButton>
      <div className="textArea">
        <Title
          text={t('APQP.Title')}
          justifyContent={`justify-content-center`}
          col={`col-lg-7 col-sm-10`}
        />
        <div className="content">
          <p className="description col-lg-7 col-sm-10">{t('APQP.Content')}</p>
        </div>
      </div>
    </section>
  )
}

const Section2 = (props) => {
  const { t } = props
  const imgAry = [
    apqpSchdule,
    apqpSpreadOut,
    apqpMeetingRecord,
    verifiedToolingDrawing1,
    packagingProposalSheet,
    diagram,
    fmea,
    cp,
    capacityEvaluation,
    apqpCheckList,
    ProductQualityPlanningSummaryandApprovals,
    EngineeringChangeNotices,
    feasibilityAssessment,
    apqpHandover,
  ]
  const titleAry = [
    t('APQP.APQPSchdule'),
    t('APQP.APQPStepsSpreadOut'),
    t('APQP.MeetingRecord'),
    t('APQP.VerifiedToolingDrawing'),
    t('APQP.PackagingProposalSheet'),
    t('APQP.Diagram'),
    t('APQP.FailureModuleEffectsAnalysis'),
    t('APQP.ControlPlan'),
    t('APQP.CapacityEvaluation'),
    t('APQP.APQPChecklist'),
    t('APQP.ProductQualityPlanning'),
    t('APQP.EngineeringChangeNotices'),
    t('APQP.FeasibilityAssessment'),
    t('APQP.APQPHandover'),
  ]
  const fileAry = [
    APQPSchdule,
    APQPSpreadOut,
    APQPMeetingRecord,
    VerifiedToolingDrawing,
    PackagingProposalSheet,
    Diagram,
    FMEA,
    CP,
    CapacityEvaluation,
    APQPCheckList,
    APQPSampleReport,
    ProcessChange,
    FeasibilityAssessment,
    APQPHandover,
  ]
  const placeholderAry = [
    apqpSchdulePlaceholder,
    apqpSpreadOutPlaceholder,
    apqpMeetingRecordPlaceholder,
    verifiedToolingDrawing1Placeholder,
    packagingProposalSheetPlaceholder,
    diagramPlaceholder,
    fmeaPlaceholder,
    cpPlaceholder,
    capacityEvaluationPlaceholder,
    apqpCheckListPlaceholder,
    ProductQualityPlanningSummaryandApprovalsPlaceholder,
    EngineeringChangeNoticesPlaceholder,
    feasibilityAssessmentPlaceholder,
    apqpHandoverPlaceholder,
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
    <section className="apqpSection2">
      <div className="content" data-aos="zoom-in">
        <Carousel
          variant="dark"
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          interval={2500}
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
                      alt={`APQP${i}`}
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
              max="13"
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

function APQP(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>APQP | {t('Home.HTMLTitle')}</title>
        <meta property="og:title" content="APQP" />
      </Helmet>
      <main>
        <Section1 t={t} />
        <Section2 t={t} />
      </main>
    </>
  )
}

export default withRouter(APQP)

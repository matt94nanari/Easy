import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import SectionRight from '../components/SectionRight'
import SectionLeft from '../components/SectionLeft'
import factoryArea1B2C from '../images/facility/factoryArea-1B2C.webp'
import factoryArea1B2CPlaceholder from '../images/facility/factoryArea-1B2C-placeholder.webp'
import factoryAreaMSF from '../images/facility/factoryArea-MSF.webp'
import factoryAreaMSFPlaceholder from '../images/facility/factoryArea-MSF-placeholder.webp'
import factoryAreaThreading from '../images/facility/factoryArea-Threading.webp'
import factoryAreaThreadingPlaceholder from '../images/facility/factoryArea-Threading-placeholder.webp'
import factoryAreaTapping from '../images/facility/factoryArea-Tapping.webp'
import factoryAreaTappingPlaceholder from '../images/facility/factoryArea-Tapping-placeholder.webp'
import factoryAreaAssembling from '../images/facility/factoryArea-Assembling.webp'
import factoryAreaAssemblingPlaceholder from '../images/facility/factoryArea-Assembling-placeholder.webp'
import factoryAreaHeadSlotting from '../images/facility/factoryAreaHeadSlotting.webp'
// import factoryAreaHeadSlottingPlaceholder from '../images/facility/factoryAreaHeadSlotting-placeholder.webp'
import factoryAreaPressing from '../images/facility/factoryArea-Pressing.webp'
import factoryAreaPressingPlaceholder from '../images/facility/factoryArea-Pressing-placeholder.webp'
import operating1B2C from '../images/facility/operating1B2C.webp'
import operating1B2CPlaceholder from '../images/facility/operating1B2C-placeholder.webp'
import operatingMSF from '../images/facility/operatingMSF.webp'
import operatingMSFPlaceholder from '../images/facility/operatingMSF-placeholder.webp'
import operatingThreading from '../images/facility/operatingThreading.webp'
import operatingThreadingPlaceholder from '../images/facility/operatingThreading-placeholder.webp'
import factoryAreaTapping2 from '../images/facility/factoryArea-Tapping2.webp'
import factoryAreaTapping2Placeholder from '../images/facility/factoryArea-Tapping2-placeholder.webp'
import factoryAreaHeadSlotting2 from '../images/facility/factoryAreaHeadSlotting2.webp'
// import factoryAreaHeadSlotting2Placeholder from '../images/facility/factoryAreaHeadSlotting2-placeholder.webp'
import assembling from '../images/facility/assembling.webp'
import assemblingPlaceholder from '../images/facility/assembling-placeholder.webp'
import pressing from '../images/facility/pressing.webp'
import pressingPlaceholder from '../images/facility/pressing-placeholder.webp'
function Facility(props) {
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>
          {t('HeaderNavbar.Facility.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('HeaderNavbar.Facility.Title')} />
      </Helmet>
      <main>
        <SectionLeft
          bannerButton={t('Facility.Title')}
          section={`facilitesSection1`}
          id={`Forging-1B2C`}
          image1={operating1B2C}
          image2={factoryArea1B2C}
          placeholder1={operating1B2CPlaceholder}
          placeholder2={factoryArea1B2CPlaceholder}
          imageName1={`operating1B2C`}
          imageName2={`factoryArea1B2C`}
          title={t('Facility.Forging-1B2C.Title')}
          description={[
            t('Facility.Forging-1B2C.Content').split('#')[1],
            t('Facility.Forging-1B2C.Content').split('#')[2],
            t('Facility.Forging-1B2C.Content').split('#')[3],
            t('Facility.Forging-1B2C.Content').split('#')[4],
            t('Facility.Forging-1B2C.Content').split('#')[5],
            t('Facility.Forging-1B2C.Content').split('#')[6],
          ]}
          description2={t('Facility.Forging-1B2C.Content2')}
        />
        <SectionRight
          section={`facilitesSection2`}
          id={`Forging-MSF`}
          image1={factoryAreaMSF}
          image2={operatingMSF}
          placeholder1={factoryAreaMSFPlaceholder}
          placeholder2={operatingMSFPlaceholder}
          imageName1={`factoryAreaMSF`}
          imageName2={`operatingMSF`}
          title={t('Facility.Forging-MSF.Title')}
          description={[
            t('Facility.Forging-MSF.Content').split('#')[1],
            t('Facility.Forging-MSF.Content').split('#')[2],
            t('Facility.Forging-MSF.Content').split('#')[3],
            t('Facility.Forging-MSF.Content').split('#')[4],
          ]}
        />
        <SectionLeft
          aos={true}
          section={`facilitesSection3`}
          id={`Threading`}
          image1={operatingThreading}
          image2={factoryAreaThreading}
          placeholder1={operatingThreadingPlaceholder}
          placeholder2={factoryAreaThreadingPlaceholder}
          imageName1={`operatingThreading`}
          imageName2={`factoryAreaThreading`}
          title={t('Facility.Threading.Title')}
          description={t('Facility.Threading.Content')}
        />
        <SectionRight
          section={`facilitesSection4`}
          id={`Tapping`}
          image1={factoryAreaTapping}
          image2={factoryAreaTapping2}
          placeholder1={factoryAreaTappingPlaceholder}
          placeholder2={factoryAreaTapping2Placeholder}
          imageName1={`factoryAreaTapping`}
          imageName2={`factoryAreaTapping2`}
          title={t('Facility.Tapping.Title')}
          description={t('Facility.Tapping.Content')}
        />
        <SectionLeft
          aos={true}
          section={`facilitesSection5`}
          id={`Assembling`}
          image1={assembling}
          image2={factoryAreaAssembling}
          placeholder1={assemblingPlaceholder}
          placeholder2={factoryAreaAssemblingPlaceholder}
          imageName1={`assembling`}
          imageName2={`factoryAreaAssembling`}
          title={t('Facility.Assembling.Title')}
          description={t('Facility.Assembling.Content')}
        />
        <SectionRight
          section={`facilitesSection6`}
          id={`SecondaryOperation`}
          image1={factoryAreaHeadSlotting}
          image2={factoryAreaHeadSlotting2}
          imageName1={`factoryAreaHeadSlotting`}
          imageName2={`factoryAreaHeadSlotting2`}
          title={t('Facility.SecondaryOperation.Title')}
          description={t('Facility.SecondaryOperation.Content')}
        />
        <SectionLeft
          aos={true}
          section={`facilitesSection7`}
          id={`Stamping`}
          image1={pressing}
          image2={factoryAreaPressing}
          imageName1={`pressing`}
          imageName2={`factoryAreaPressing`}
          placeholder1={pressingPlaceholder}
          placeholder2={factoryAreaPressingPlaceholder}
          title={t('Facility.Stamping.Title')}
          description={t('Facility.Stamping.Content')}
        />
      </main>
    </>
  )
}
export default withRouter(Facility)

import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import SectionRight from '../components/SectionRight'
import SectionLeft from '../components/SectionLeft'
import AreaSorting1 from '../images/facility/factoryAreaSorting.webp'
import AreaSorting1Placeholder from '../images/facility/factoryAreaSorting-placeholder.webp'
import AreaSorting2 from '../images/facility/factoryAreaSorting2.webp'
import AreaSorting2Placeholder from '../images/facility/factoryAreaSorting2-placeholder.webp'
import AreaSorting3 from '../images/facility/factoryAreaSorting3.webp'
import AreaSorting3Placeholder from '../images/facility/factoryAreaSorting3-placeholder.webp'
import opticalSorting1 from '../images/sorting/opticalSorting1.webp'
import opticalSorting1Placeholder from '../images/sorting/opticalSorting1-placeholder.webp'
import opticalSorting2 from '../images/sorting/opticalSorting2.webp'
import opticalSorting2Placeholder from '../images/sorting/opticalSorting2-placeholder.webp'
import opticalSorting3 from '../images/sorting/opticalSorting3.webp'
import opticalSorting3Placeholder from '../images/sorting/opticalSorting3-placeholder.webp'
import opticalSorting4 from '../images/sorting/opticalSorting4.webp'
import opticalSorting4Placeholder from '../images/sorting/opticalSorting4-placeholder.webp'
import opticalSorting5 from '../images/sorting/opticalSorting5.webp'
import opticalSorting5Placeholder from '../images/sorting/opticalSorting5-placeholder.webp'
import robotSorting from '../images/sorting/robotSorting.webp'
import robotSortingPlaceholder from '../images/sorting/robotSorting-placeholder.webp'
import gageSorting from '../images/sorting/gageSorting.webp'
import gageSortingPlaceholder from '../images/sorting/gageSorting-placeholder.webp'
function OpticalRobotSorting(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('OpticalRobotSorting.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('OpticalRobotSorting.Title')} />
      </Helmet>
      <main>
        <SectionLeft
          bannerButton={t('OpticalRobotSorting.Title')}
          section={`opticalSortingSection1`}
          id={`SortingFactory`}
          title={t('OpticalRobotSorting.SortingFactory.Title')}
          description={[
            t('OpticalRobotSorting.SortingFactory.Content').split('-')[0],
            t('OpticalRobotSorting.SortingFactory.Content').split('-')[1],
          ]}
          imgAry={[AreaSorting1, AreaSorting2, AreaSorting3]}
          placeholderAry={[
            AreaSorting1Placeholder,
            AreaSorting2Placeholder,
            AreaSorting3Placeholder,
          ]}
        />
        <SectionRight
          section={`opticalSortingSection2`}
          id={`OpticalSorting`}
          title={t('OpticalRobotSorting.OpticalSorting.Title')}
          description={[
            t('OpticalRobotSorting.OpticalSorting.Content').split('-')[0],
            t('OpticalRobotSorting.OpticalSorting.Content').split('-')[1],
            t('OpticalRobotSorting.OpticalSorting.Content').split('-')[2],
            t('OpticalRobotSorting.OpticalSorting.Content').split('-')[3],
            t('OpticalRobotSorting.OpticalSorting.Content').split('-')[4],
          ]}
          imgAry={[
            opticalSorting1,
            opticalSorting2,
            opticalSorting3,
            opticalSorting4,
            opticalSorting5,
          ]}
          placeholderAry={[
            opticalSorting1Placeholder,
            opticalSorting2Placeholder,
            opticalSorting3Placeholder,
            opticalSorting4Placeholder,
            opticalSorting5Placeholder,
          ]}
        />
        <SectionLeft
          aos={true}
          section={`opticalSortingSection3`}
          id={`RobotSorting`}
          title={t('OpticalRobotSorting.RobotSorting.Title')}
          description={[
            t('OpticalRobotSorting.RobotSorting.Content').split('-')[0],
            t('OpticalRobotSorting.RobotSorting.Content').split('-')[1],
          ]}
          imgAry={[robotSorting, gageSorting]}
          placeholderAry={[robotSortingPlaceholder, gageSortingPlaceholder]}
        />
      </main>
    </>
  )
}

export default withRouter(OpticalRobotSorting)

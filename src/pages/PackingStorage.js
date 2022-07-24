import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import SectionRight from '../components/SectionRight'
import SectionLeft from '../components/SectionLeft'
import packing from '../images/packing/packing.webp'
import packingPlaceholder from '../images/packing/packing-placeholder.webp'
import packing2 from '../images/packing/packing2.webp'
import packing2Placeholder from '../images/packing/packing2-placeholder.webp'
import packing3 from '../images/packing/packing3.webp'
import packing3Placeholder from '../images/packing/packing3-placeholder.webp'
import packing4 from '../images/packing/packing4.webp'
import packing4Placeholder from '../images/packing/packing4-placeholder.webp'
import ASRS from '../images/packing/ASRS.webp'
import ASRSPlaceholder from '../images/packing/ASRS-placeholder.webp'
import ASRS2 from '../images/packing/ASRS2.webp'
import ASRS2Placeholder from '../images/packing/ASRS2-placeholder.webp'
import ASRS3 from '../images/packing/ASRS3.webp'
import ASRS3Placeholder from '../images/packing/ASRS3-placeholder.webp'
import Cookies from 'js-cookie'
function PackingStorage(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  const [language, setLanguage] = useState('')
  const [packingDescription, setPackingDescription] = useState('')
  const [ASRSDescription, setASRSDescription] = useState('')
  useEffect(() => {
    const userLanguage = Cookies.get('i18next')
    setLanguage(userLanguage)
    switch (userLanguage) {
      case 'es':
        setPackingDescription([
          t('PackingStorage.Packing.Content').split('-')[0],
          t('PackingStorage.Packing.Content').split('-')[1],
          t('PackingStorage.Packing.Content').split('-')[2],
          t('PackingStorage.Packing.Content').split('-')[3],
          t('PackingStorage.Packing.Content').split('-')[4],
        ])
        setASRSDescription([
          t('PackingStorage.Storage.Content').split('-')[0],
          t('PackingStorage.Storage.Content').split('-')[1],
          t('PackingStorage.Storage.Content').split('-')[2],
        ])
        break
      case 'zh-TW':
        setPackingDescription(t('PackingStorage.Packing.Content'))
        setASRSDescription(t('PackingStorage.Storage.Content'))
        break
      case 'zh':
        setPackingDescription(t('PackingStorage.Packing.Content'))
        setASRSDescription(t('PackingStorage.Storage.Content'))
        break
      default:
        setPackingDescription([
          t('PackingStorage.Packing.Content').split('-')[0],
          t('PackingStorage.Packing.Content').split('-')[1],
          t('PackingStorage.Packing.Content').split('-')[2],
          t('PackingStorage.Packing.Content').split('-')[3],
          t('PackingStorage.Packing.Content').split('-')[4],
        ])
        setASRSDescription([
          t('PackingStorage.Storage.Content').split('-')[0],
          t('PackingStorage.Storage.Content').split('-')[1],
          t('PackingStorage.Storage.Content').split('-')[2],
        ])
        break
    }
  }, [language, t])
  return (
    <>
      <Helmet>
        <title>
          {t('PackingStorage.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('PackingStorage.Title')} />
      </Helmet>
      <main>
        <SectionLeft
          bannerButton={t('PackingStorage.Title')}
          section={`packingStorageSection1`}
          id={`Packing`}
          title={t('PackingStorage.Packing.Title')}
          description={packingDescription}
          description2={t('PackingStorage.Hint')}
          imgAry={[packing, packing2, packing3, packing4]}
          placeholderAry={[
            packingPlaceholder,
            packing2Placeholder,
            packing3Placeholder,
            packing4Placeholder,
          ]}
        />
        <SectionRight
          section={`packingStorageSection2`}
          id={`ASRS`}
          title={t('PackingStorage.Storage.Title')}
          description={ASRSDescription}
          description2={t('PackingStorage.Hint')}
          imgAry={[ASRS, ASRS2, ASRS3]}
          placeholderAry={[ASRSPlaceholder, ASRS2Placeholder, ASRS3Placeholder]}
        />
      </main>
    </>
  )
}

export default withRouter(PackingStorage)

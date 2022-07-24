import { useEffect } from 'react'
import BannerButton from '../components/BannerButton'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import Icons from '../components/Icons'
import Title from '../components/Title'
import fedex from '../images/other/fedex.webp'
import ups from '../images/other/ups.webp'
const Section1 = (props) => {
  const { t } = props
  return (
    <section className="onlineServiceSection1">
      <BannerButton color={`darkGreen`} location={`left`}>
        {t('OnlineService.Title')}
      </BannerButton>
      <div className="d-flex flex-wrap">
        <div className="textArea mx-auto">
          <Title text={t('OnlineService.Title2')} />
          <ul className="description d-flex flex-wrap">
            <li className="m-3">
              <p>{t('OnlineService.Inventory')}</p>
              <div className="my-3 iconsArea">
                <div>
                  <Icons
                    iconName={'logisticSystemIcon'}
                    url={'http://www.easylink.com.tw/logistic/login.htm'}
                    text={true}
                  >
                    {t('OnlineService.LogisticSystem').split('-')[0]}
                    <br />
                    {t('OnlineService.LogisticSystem').split('-')[1]}
                  </Icons>
                </div>
              </div>
            </li>
            <li className="m-3">
              <p>{t('OnlineService.ProductionStatus')}</p>
              <div className="my-3 iconsArea">
                <div>
                  <Icons
                    iconName={'orderTrackingIcon'}
                    url={'http://www.easylink.com.tw/ORD/login.htm'}
                    text={true}
                  >
                    {t('OnlineService.OrderTracking').split('-')[0]}
                    <br />
                    {t('OnlineService.OrderTracking').split('-')[1]}
                  </Icons>
                </div>
              </div>
            </li>
            <li className="m-3">
              <p>{t('OnlineService.Samples&Document')}</p>
              <div className="iconsArea">
                <div className="d-flex justify-content-between">
                  <div>
                    <Icons
                      iconName={'upsIcon'}
                      imgName={'ups'}
                      url={'https://wwwapps.ups.com/etracking/tracking.cgi'}
                      src={ups}
                      text={false}
                    />
                  </div>
                  <div className="mx-3">
                    <Icons
                      iconName={'fedexIcon'}
                      imgName={'fedex'}
                      url={
                        'https://www.fedex.com/fedextrack/?action=track&cntry_code=tw_english'
                      }
                      src={fedex}
                      text={false}
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
function ServiceInsurance(props) {
  const { t } = useTranslation()
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  return (
    <>
      <Helmet>
        <title>
          {t('OnlineService.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta property="og:title" content={t('OnlineService.Title')} />
      </Helmet>
      <main>
        <Section1 t={t} />
      </main>
    </>
  )
}

export default withRouter(ServiceInsurance)

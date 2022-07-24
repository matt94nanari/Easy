import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import Title from '../components/Title'
import ImageLoader from '../components/ImageLoader'
import { withRouter, Link, useParams, Redirect } from 'react-router-dom'
import news1 from '../images/aboutEasy/news1.webp'
import news2 from '../images/aboutEasy/news2.webp'
import news3 from '../images/aboutEasy/news3.webp'
import news4 from '../images/aboutEasy/news4.webp'
import news5 from '../images/aboutEasy/news5.webp'
import placeholder from '../images/other/placeholder.webp'
function News(props) {
  const { t } = useTranslation()
  const newsAry = [
    t('AboutEasylink.News&Events.News1.Content'),
    t('AboutEasylink.News&Events.News2.Content'),
    t('AboutEasylink.News&Events.News3.Content'),
    t('AboutEasylink.News&Events.News4.Content'),
    t('AboutEasylink.News&Events.News5.Content'),
  ]
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState(newsAry[0])
  const [linkPrevious, setLinkPrevious] = useState(`/news/1`)
  const [linkNext, setLinkNext] = useState(`/news/2`)
  const [warning, setWarning] = useState('')
  const { newsPages } = useParams()
  const urlAry = ['/news/1', '/news/2', '/news/3', '/news/4', '/news/5']
  useEffect(() => {
    const imgAry = [news1, news2, news3, news4, news5]
    const newsAry = [
      t('AboutEasylink.News&Events.News1.Content'),
      t('AboutEasylink.News&Events.News2.Content'),
      t('AboutEasylink.News&Events.News3.Content'),
      t('AboutEasylink.News&Events.News4.Content'),
      t('AboutEasylink.News&Events.News5.Content'),
    ]
    setImage(imgAry[parseInt(newsPages) - 1])
    setTitle(newsAry[parseInt(newsPages) - 1])
  }, [t])
  useEffect(() => {
    props.setGreenHeaderStyle(true)
    const imgAry = [news1, news2, news3, news4, news5]
    const newsAry = [
      t('AboutEasylink.News&Events.News1.Content'),
      t('AboutEasylink.News&Events.News2.Content'),
      t('AboutEasylink.News&Events.News3.Content'),
      t('AboutEasylink.News&Events.News4.Content'),
      t('AboutEasylink.News&Events.News5.Content'),
    ]
    const urlAry = ['/news/1', '/news/2', '/news/3', '/news/4', '/news/5']
    if (urlAry.indexOf(props.location.pathname) > 0) {
      setImage(imgAry[parseInt(newsPages) - 1])
      setTitle(newsAry[parseInt(newsPages) - 1])
      setLinkPrevious(`/news/${parseInt(newsPages) - 1}`)
      setLinkNext(`/news/${parseInt(newsPages) + 1}`)
    }
  }, [props, newsPages, t])

  if (urlAry.indexOf(props.location.pathname) < 0) {
    return (
      <>
        <Redirect to="/page-not-found" />
      </>
    )
  }
  return (
    <>
      <Helmet>
        <title>
          {t('AboutEasylink.News&Events.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta
          property="og:title"
          content={t('AboutEasylink.News&Events.Title')}
        />
      </Helmet>
      <main>
        <section className="newsSection1">
          <BannerButton color={`darkGreen`} location={`left`}>
            {t('AboutEasylink.News&Events.Title')}
          </BannerButton>
          <Title text={title} justifyContent={`justify-content-center`} />
          <div className="photo d-flex flex-wrap justify-content-center">
            <div className="col-md-6 col-sm-8 col-12 my-5 text-center">
              <ImageLoader src={image} alt={`news`} placeholder={placeholder} />
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-wrap col-lg-4 col-md-6 col-sm-8 col-10 justify-content-between">
              <Link
                to={linkPrevious}
                onClick={(e) => {
                  if (props.location.pathname === '/news/1') {
                    e.preventDefault()
                    setWarning(t('Warning'))
                  }
                }}
              >
                {t('Previous')}
              </Link>
              <Link
                to={linkNext}
                onClick={(e) => {
                  if (props.location.pathname === '/news/5') {
                    e.preventDefault()
                    setWarning(t('Warning2'))
                  }
                }}
              >
                {t('Next')}
              </Link>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <p className="warning">{warning}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default withRouter(News)

import { Helmet } from 'react-helmet-async'
// import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import Title from '../components/Title'
import ImageLoader from '../components/ImageLoader'
import {
  withRouter,
  Link,
  useParams,
  Redirect,
  useLocation,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListNewsDetailsAsync, ListAllNewsDetailsAsync } from '../actions'
import placeholder from '../images/other/placeholder.webp'
function News(props) {
  const location = useLocation()
  const {
    ListNewsDetailsAsync,
    ListAllNewsDetailsAsync,
    newsDetails,
    allNewsDetails,
  } = props
  // const { t } = useTranslation()
  const [urlAry, setUrlAry] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [linkPrevious, setLinkPrevious] = useState(`/news/1`)
  const [linkNext, setLinkNext] = useState(`/news/2`)
  const [warning, setWarning] = useState('')
  const { newsPages } = useParams()
  useEffect(() => {
    ListNewsDetailsAsync({ nID: newsPages })
    ListAllNewsDetailsAsync()
  }, [newsPages])
  useEffect(() => {
    if (newsDetails[0]) {
      setTitle(newsDetails[0].title)
      setContent(newsDetails[0].content)
    }
  }, [newsDetails])
  useEffect(() => {
    if (allNewsDetails) {
      const urlAry = []
      for (let i = 0; i < allNewsDetails.length; i++) {
        urlAry.push(`/news/${i + 1}`)
      }
      setUrlAry([...urlAry])
    }
  }, [allNewsDetails])
  useEffect(() => {
    props.setGreenHeaderStyle(true)
  }, [props])
  useEffect(() => {
    if (urlAry.indexOf(location.pathname) > 0) {
      setLinkPrevious(`/news/${parseInt(newsPages) - 1}`)
      setLinkNext(`/news/${parseInt(newsPages) + 1}`)
    }
  }, [newsPages, urlAry, location])
  if (urlAry.length !== 0) {
    if (urlAry.indexOf(location.pathname) < 0) {
      return (
        <>
          <Redirect to="/page-not-found" />
        </>
      )
    }
  }
  return (
    <>
      <Helmet>
        <title>News & Events | Easylink Industrial CO.,LTD.</title>
      </Helmet>
      <main>
        <section className="newsSection1">
          <BannerButton color={`darkGreen`} location={`left`}>
            News & Events
          </BannerButton>
          <Title text={title} justifyContent={`justify-content-center`} />
          <div className="photo col-md-6 col-sm-8 col-12 my-5 text-center mx-auto">
            <ImageLoader
              src={
                newsDetails[0]
                  ? require('../images/aboutEasy/news' +
                      newsDetails[0].nID +
                      '.webp')
                  : ''
              }
              alt={`news`}
              placeholder={placeholder}
            />
          </div>
          {content ? (
            <div className="content col-md-6 col-sm-8 col-10 my-3 mx-auto">
              {content}
            </div>
          ) : (
            <></>
          )}
          <div className="d-flex flex-wrap justify-content-center mt-5">
            <div className="d-flex flex-wrap col-lg-4 col-md-6 col-sm-8 col-10 justify-content-between">
              <Link
                to={linkPrevious}
                onClick={(e) => {
                  if (props.location.pathname === '/news/1') {
                    e.preventDefault()
                    setWarning('This is the latest news.')
                  }
                }}
              >
                Previous
              </Link>
              <Link
                to={linkNext}
                onClick={(e) => {
                  if (props.location.pathname === urlAry[urlAry.length - 1]) {
                    e.preventDefault()
                    setWarning('Sorry, but there is no more.')
                  }
                }}
              >
                Next
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
const mapStateToProps = (store) => {
  return {
    allNewsDetails: store.allNewsDetails,
    newsDetails: store.newsDetails,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { ListNewsDetailsAsync, ListAllNewsDetailsAsync },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(News))

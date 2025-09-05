import React, { useState, useEffect, Suspense } from 'react'
import ReactGA from 'react-ga4'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { HelmetProvider } from 'react-helmet-async'
import smoothscroll from 'smoothscroll-polyfill'
import AOS from 'aos'
//import components
import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './utils/ScrollToTop'
import PrivacyButton from './components/PirvacyButton'
//import pages
import Home from './pages/Home'
import Facility from './pages/Facility'
import PageNotFound from './pages/PageNotFound'
import LabTest from './pages/LabTest'
import ProductionControlManagement from './pages/ProductionControlManagement'
import PPAP from './pages/PPAP'
import APQP from './pages/APQP'
import OnlineService from './pages/OnlineService'
import Products from './pages/Products'
import AboutEasylink from './pages/AboutEasylink'
import Testimonial from './pages/Testimonial'
import Tooling from './pages/Tooling'
import PackingStorage from './pages/PackingStorage'
import OpticalRobotSorting from './pages/OpticalRobotSorting'
import PrivacyPolicy from './pages/PrivacyPolicy'
import News from './pages/News'
import TechnicalCorner from './pages/TechnicalCorner'
import EmployeeGarden from './pages/EmployeeGarden'
// import CSR from './pages/CSR'
function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [greenHeaderStyle, setGreenHeaderStyle] = useState(false)
  const [testimonialContent, setTestimonialContent] = useState('')
  const [darkenBackground, setDarkenBackground] = useState(false)
  const [hashID, setHashID] = useState('')
  smoothscroll.polyfill()
  //google analytics
  useEffect(() => {
    ReactGA.initialize('G-FBPBBXPGZG')
    ReactGA.send('pageview')
    const refreshAOS = () => {
      AOS.refresh()
    }
    window.addEventListener('scroll', refreshAOS)
  }, [])
  useEffect(() => {
    const handleAos = () => {
      AOS.init({
        duration: 500,
      })
    }
    if (showLoader) {
      setTimeout(() => {
        setShowLoader(false)
        handleAos()
        setDarkenBackground(false)
      }, 1500)
    }
  }, [showLoader])
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <HelmetProvider>
          <Suspense fallback={null}>
            <ScrollToTop
              setShowLoader={setShowLoader}
              showLoader={showLoader}
              hashID={hashID}
            >
              <Loader showLoader={showLoader} />
              <Header
                setShowLoader={setShowLoader}
                greenHeaderStyle={greenHeaderStyle}
                darkenBackground={darkenBackground}
                setDarkenBackground={setDarkenBackground}
                setTestimonialContent={setTestimonialContent}
                setHashID={setHashID}
              />
              <PrivacyButton />
              <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={450}
                      classNames="fade"
                    >
                      <Switch location={location}>
                        <Route exact path="/">
                          <Home
                            setGreenHeaderStyle={setGreenHeaderStyle}
                            showLoader={showLoader}
                            setShowLoader={setShowLoader}
                            darkenBackground={darkenBackground}
                            setDarkenBackground={setDarkenBackground}
                          />
                        </Route>
                        <Route exact path="/news/:newsPages">
                          <News setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route
                          exact
                          path="/technical-corner/:technicalCornerPages"
                        >
                          <TechnicalCorner
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/privacy-policy">
                          <PrivacyPolicy
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        {/* <Route exact path="/csr">
                          <CSR setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route> */}
                        <Route exact path="/employee-garden">
                          <EmployeeGarden
                            setShowLoader={setShowLoader}
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/facility">
                          <Facility setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route exact path="/production-control-management">
                          <ProductionControlManagement
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/optical-robot-sorting">
                          <OpticalRobotSorting
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/packing-storage">
                          <PackingStorage
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/lab-test">
                          <LabTest setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route exact path="/production-control-management/ppap">
                          <PPAP setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route exact path="/production-control-management/apqp">
                          <APQP setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route exact path="/products">
                          <Products setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route exact path="/about-easylink">
                          <AboutEasylink
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/tooling">
                          <Tooling setGreenHeaderStyle={setGreenHeaderStyle} />
                        </Route>
                        <Route exact path="/online-service">
                          <OnlineService
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route exact path="/testimonial">
                          <Testimonial
                            testimonialContent={testimonialContent}
                            setTestimonialContent={setTestimonialContent}
                            setShowLoader={setShowLoader}
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                        <Route path="*">
                          <PageNotFound
                            setGreenHeaderStyle={setGreenHeaderStyle}
                          />
                        </Route>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
              <span></span>
              <BackToTop />
              <Footer setTestimonialContent={setTestimonialContent} />
            </ScrollToTop>
          </Suspense>
        </HelmetProvider>
      </Router>
    </>
  )
}

export default App

import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import mascot from '../images/other/mascot.webp'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { RiGlobalLine } from 'react-icons/ri'
import Cookies from 'js-cookie'
import * as Scroll from 'react-scroll'
import logo from '../images/other/logo.svg'
import logoText from '../images/other/logoText.svg'
import { useTrail, a } from '@react-spring/web'
let ScrollLink = Scroll.Link
const LanguageList = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    marginBottom: 3,
    marginRight: 20,
    from: {
      opacity: 0,
    },
  })
  return (
    <div className="d-flex">
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  )
}
const smoothScroll = (h) => {
  let i = h || 0
  if (i > 10) {
    setTimeout(() => {
      window.scrollTo(0, i)
      smoothScroll(i - 200)
    }, 50)
  } else if (i < 0) {
    window.scrollTo(0, 0)
  } else {
    return
  }
}
const NavbarList = (props) => {
  const {
    location,
    languageRef,
    setLanguage,
    openLanguageList,
    handleLanguage,
    navbarListAry,
    address,
    option,
    optionRef,
    setHashID,
    setShowLoader,
    t,
    setTestimonialContent,
    languageAry,
    languageCodeAry,
    changeLanguage,
  } = props
  const optionTitle = [
    'AboutEasylink',
    'Facility',
    'Products',
    'ProductionControlManagement',
    'Tooling',
    'LabTest',
    'OpticalRobotSorting',
    'PackingStorage',
    'Testimonial',
    'OnlineService',
  ]
  return (
    <Nav className="mx-auto">
      <div>
        <Image src={mascot} alt="mascot" thumbnail className="mascot" />
        {navbarListAry.map((v, i) => (
          <div
            className={`nav-item ${
              option[i] && option[i].length > 0 ? 'withOptions' : ''
            }`}
            key={i}
          >
            {v === t('HeaderNavbar.ContactUs.Title') ? (
              <a
                href="mailTo:sales@easylink.com.tw?subject=(EasyWeb)"
                className={`nav-link nav-link${i}`}
              >
                {v}
              </a>
            ) : (
              <>
                <Nav.Link
                  className={`nav-link${i}`}
                  activeClassName="selected"
                  exact
                  as={NavLink}
                  to={address[i]}
                  onClick={(e) => {
                    if (option[i] && option[i].length > 0) {
                      e.preventDefault()
                      if (optionRef.current[i].classList.contains('show')) {
                        optionRef.current[i].classList.remove('show')
                      } else {
                        optionRef.current[i].classList.add('show')
                      }
                    } else {
                      if (location.pathname === address[i]) {
                        e.preventDefault()
                        smoothScroll(window.pageYOffset)
                        document.querySelector('.navbar-toggler').click()
                      } else {
                        props.setShowLoader(true)
                        document.querySelector('.navbar-toggler').click()
                      }
                    }
                  }}
                >
                  {v}
                </Nav.Link>
                <ul
                  className="optionsList"
                  ref={(ele) => {
                    optionRef.current[i] = ele
                  }}
                >
                  {option[i]
                    ? option[i].map((v2, i2) => (
                        <li className="options" key={i2}>
                          {location.pathname === address[i] ? (
                            v2 === 'APQP' ? (
                              <Nav.Link
                                as={NavLink}
                                id={`${v2.split(' ').join('')}-link`}
                                to={`/production-control-management/${v2}`}
                              >
                                {t(`HeaderNavbar.${optionTitle[i]}.${v2}`)}
                              </Nav.Link>
                            ) : v2 === 'PPAP' ? (
                              <Nav.Link
                                as={NavLink}
                                id={`${v2.split(' ').join('')}-link`}
                                to={`/production-control-management/${v2}`}
                              >
                                {t(`HeaderNavbar.${optionTitle[i]}.${v2}`)}
                              </Nav.Link>
                            ) : v2 === 'Email' ? (
                              <Nav.Link
                                as={NavLink}
                                id={`${v2.split(' ').join('')}-link`}
                                to="/testimonial"
                                onClick={(e) => {
                                  setShowLoader(true)
                                  setTestimonialContent('email')
                                }}
                              >
                                {v2}
                              </Nav.Link>
                            ) : v2 === 'ScoreCard' ? (
                              <Nav.Link
                                as={NavLink}
                                id={`${v2.split(' ').join('')}-link`}
                                to="/testimonial"
                                onClick={() => {
                                  setShowLoader(true)
                                  setTestimonialContent('score card')
                                }}
                              >
                                {v2}
                              </Nav.Link>
                            ) : v2 === 'Audit' ? (
                              <Nav.Link
                                as={NavLink}
                                id={`${v2.split(' ').join('')}-link`}
                                to="/testimonial"
                                onClick={() => {
                                  setShowLoader(true)
                                  setTestimonialContent('audit')
                                }}
                              >
                                {v2}
                              </Nav.Link>
                            ) : (
                              <ScrollLink
                                to={`${v2.split(' ').join('')}`}
                                id={`${v2.split(' ').join('')}-link`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                className="nav-link"
                                onClick={() => {
                                  if (props.collapse) {
                                    document
                                      .querySelector('.navbar-toggler')
                                      .click()
                                  }
                                }}
                              >
                                {t(`HeaderNavbar.${optionTitle[i]}.${v2}`)}
                              </ScrollLink>
                            )
                          ) : (
                            <Nav.Link
                              as={NavLink}
                              id={`${v2.split(' ').join('')}-link`}
                              onClick={() => {
                                setHashID(v2.split(' ').join(''))
                                if (v2 === 'Email') {
                                  setTestimonialContent('email')
                                } else if (v2 === 'ScoreCard') {
                                  setTestimonialContent('score card')
                                } else if (v2 === 'Audit') {
                                  setTestimonialContent('audit')
                                } else {
                                  return
                                }
                              }}
                              to={
                                v2 === 'APQP'
                                  ? `/production-control-management/${v2}`
                                  : v2 === 'PPAP'
                                  ? `/production-control-management/${v2}`
                                  : `${address[i]}`
                              }
                            >
                              {t(`HeaderNavbar.${optionTitle[i]}.${v2}`)}
                            </Nav.Link>
                          )}
                        </li>
                      ))
                    : ''}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
      <div>
        <div
          className={
            openLanguageList ? 'languageMobile open' : 'languageMobile'
          }
          ref={languageRef}
        >
          <button onClick={handleLanguage}>
            <RiGlobalLine style={{ fontSize: '1.5rem' }} />
          </button>
          <div
            className={openLanguageList ? 'languageList open' : 'languageList'}
          >
            <LanguageList open={openLanguageList}>
              {languageAry.map((v, i) => (
                <button
                  key={i}
                  className={`${languageCodeAry[i]} languageOptions`}
                  onClick={() => {
                    changeLanguage(languageCodeAry[i])
                    setLanguage(v)
                    document.querySelector('.navbar-toggler').click()
                  }}
                >
                  {v}
                </button>
              ))}
            </LanguageList>
          </div>
        </div>
        <div className="contact">
          <div className="title">
            <p>{t('HeaderNavbar.ContactUs.Title')}</p>
          </div>
          <div className="phone">
            <p>
              <AiFillPhone
                style={{
                  color: '#154745',
                  fontSize: '1.5rem',
                  marginRight: '10px',
                }}
              />{' '}
              {t('HeaderNavbar.ContactUs.Phone')}
            </p>
          </div>
          <div className="mail">
            <a href="mailTo:sales@easylink.com.tw?subject=(EasyWeb)">
              <p>
                <AiOutlineMail
                  style={{
                    color: '#154745',
                    fontSize: '1.5rem',
                    marginRight: '10px',
                  }}
                />{' '}
                {t('HeaderNavbar.ContactUs.Email')}
              </p>
            </a>
          </div>
        </div>
      </div>
    </Nav>
  )
}
function Header2(props) {
  const navbarTogglerRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(true)
  const [language, setLanguage] = useState()
  const [collapse, setCollapse] = useState(false)
  const [openLanguageList, setOpenLanguageList] = useState(false)
  const languageRef = useRef(null)
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const navbarListAry = [
    t('HeaderNavbar.AboutEasylink.Title'),
    t('HeaderNavbar.Facility.Title'),
    t('HeaderNavbar.Products.Title'),
    t('HeaderNavbar.ProductionControlManagement.Title'),
    t('HeaderNavbar.Tooling.Title'),
    t('HeaderNavbar.LabTest.Title'),
    t('HeaderNavbar.OpticalRobotSorting.Title'),
    t('HeaderNavbar.PackingStorage.Title'),
    t('HeaderNavbar.Testimonial.Title'),
    t('HeaderNavbar.OnlineService.Title'),
    t('HeaderNavbar.ContactUs.Title'),
  ]
  const address = [
    '/about-easylink',
    '/facility',
    '/products',
    '/production-control-management',
    '/tooling',
    '/lab-test',
    '/optical-robot-sorting',
    '/packing-storage',
    '/testimonial',
    '/online-service',
  ]
  const optionRef = useRef([])
  const option = [
    ['Certificate', 'News&Events', 'TechnicalCorner', 'History', 'Philosophy'],
    [
      'Forging-1B2C',
      'Forging-MSF',
      'Threading',
      'Tapping',
      'Assembling',
      'SecondaryOperation',
      'Stamping',
    ],
    [
      'AutoParts',
      'Electronics&ApplianceScrews',
      'StampingParts&SpecialNuts',
      'FurnitureScrews',
    ],
    ['Management', 'ProductionProcedure', 'APQP', 'PPAP', 'RiskManagement'],
    ['ToolingManufacture', 'ToolingManagement'],
    ['Lab', 'LabCertificate', 'Test', 'Calibration'],
    ['SortingFactory', 'OpticalSorting', 'RobotSorting'],
    ['Packing', 'ASRS'],
    ['Email', 'ScoreCard', 'Audit'],
    [],
  ]
  const quickLinkAddress = [
    '/about-easylink',
    '/facility',
    '/products',
    '/lab-test',
    '/testimonial',
    '/production-control-management',
  ]
  const quickLinkOption = [
    ['Certificate', 'News&Events', 'TechnicalCorner', 'History', 'Philosophy'],
    [
      'Forging-1B2C',
      'Forging-MSF',
      'Threading',
      'Tapping',
      'Assembling',
      'SecondaryOperation',
      'Stamping',
    ],
    [
      'AutoParts',
      'Electronics&ApplianceScrews',
      'StampingParts&SpecialNuts',
      'FurnitureScrews',
    ],
    ['Lab', 'LabCertificate', 'Test', 'Calibration'],
    ['Email', 'ScoreCard', 'Audit'],
    ['Management', 'ProductionProcedure', 'APQP', 'PPAP', 'RiskManagement'],
  ]
  useEffect(() => {
    let lastScroll = window.scrollY || document.body.scrollTop
    const handleScroll = () => {
      document.onmousemove = handleMouseMove
      function handleMouseMove(event) {
        let eventDoc, doc, body
        if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document
          doc = eventDoc.documentElement
          body = eventDoc.body
          event.pageX =
            event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)
          event.pageY =
            event.clientY +
            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0)
        }
        if (event.clientY <= 110) {
          setShowNavbar(true)
        }
      }
      const currentScroll = window.scrollY || document.body.scrollTop
      if (currentScroll > lastScroll) {
        props.setDarkenBackground(true)
        if (navbarTogglerRef.current.classList.contains('collapsed')) {
          setShowNavbar(false)
        } else {
          setShowNavbar(true)
        }
      }
      if (currentScroll === 0) {
        props.setDarkenBackground(false)
        setShowNavbar(true)
      }
      if (currentScroll < 0) {
        lastScroll = 0
      } else {
        lastScroll = currentScroll
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [props])
  useEffect(() => {
    if (!navbarTogglerRef.current.classList.contains('collapsed')) {
      document.querySelector('.navbar-toggler').click()
    }
  }, [location])
  // 根據使用者的預設語言設定網站語言
  useEffect(() => {
    const userLanguage = Cookies.get('i18next')
    switch (userLanguage) {
      case 'es':
        setLanguage('Es')
        break
      case 'en':
        setLanguage('En')
        break
      case 'zh-TW':
        setLanguage('繁')
        break
      case 'zh':
        setLanguage('简')
        break
      default:
        setLanguage('En')
        break
    }
  }, [])
  const handleToggler = () => {
    if (navbarTogglerRef.current.classList.contains('collapsed')) {
      setCollapse(true)
    } else {
      setCollapse(false)
      handleOptions()
    }
    if (languageRef.current.classList.contains('open')) {
      setOpenLanguageList(false)
    }
  }
  const handleOptions = () => {
    option.forEach((v, i) => {
      if (optionRef.current[i].classList.contains('show')) {
        return optionRef.current[i].classList.remove('show')
      }
    })
  }
  //使用者語言切換
  const languageAry = ['En', 'Es', '繁', '简']
  const languageCodeAry = ['en', 'es', 'zh-TW', 'zh']
  const handleLanguage = () => {
    setOpenLanguageList((state) => !state)
  }
  return (
    <header className={`header ${props.greenHeaderStyle ? 'green' : ''}`}>
      <Navbar
        expand="null"
        fixed="top"
        className={
          showNavbar
            ? `${
                collapse
                  ? 'active show'
                  : props.darkenBackground
                  ? 'show'
                  : 'show darken'
              }`
            : ''
        }
      >
        <div className="quickLink1 col-4 d-flex flex-wrap justify-content-center">
          <div className={openLanguageList ? 'language open' : 'language'}>
            <button onClick={handleLanguage}>
              <RiGlobalLine style={{ fontSize: '1.5rem' }} />
            </button>
            <div
              className={
                openLanguageList ? 'languageList open' : 'languageList'
              }
            >
              <LanguageList open={openLanguageList}>
                {languageAry.map((v, i) => (
                  <button
                    key={i}
                    className={`${languageCodeAry[i]} languageOptions`}
                    onClick={() => {
                      if (openLanguageList) {
                        changeLanguage(languageCodeAry[i])
                        Cookies.set('i18next', languageCodeAry[i], {
                          expires: 7,
                        })
                        setLanguage(v)
                        setOpenLanguageList(false)
                      }
                    }}
                  >
                    {v}
                  </button>
                ))}
              </LanguageList>
            </div>
          </div>
          <NavDropdown
            title={t('HeaderNavbar.AboutEasylink.Title2')}
            className={`col-3 ${
              location.pathname === quickLinkAddress[0] ? 'selected' : ''
            }`}
          >
            {quickLinkOption[0].map((v, i) => (
              <NavDropdown.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(`${v.split(' ').join('')}-link`)
                    .click()
                }}
              >
                {t(`HeaderNavbar.AboutEasylink.${v}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title={t('HeaderNavbar.Facility.Title')}
            className={`col-3 ${
              location.pathname === quickLinkAddress[1] ? 'selected' : ''
            }`}
          >
            {quickLinkOption[1].map((v, i) => (
              <NavDropdown.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(`${v.split(' ').join('')}-link`)
                    .click()
                }}
              >
                {t(`HeaderNavbar.Facility.${v}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title={t('HeaderNavbar.Products.Title')}
            className={`col-3 ${
              location.pathname === quickLinkAddress[2] ? 'selected' : ''
            }`}
          >
            {quickLinkOption[2].map((v, i) => (
              <NavDropdown.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(`${v.split(' ').join('')}-link`)
                    .click()
                }}
              >
                {t(`HeaderNavbar.Products.${v}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title={t('HeaderNavbar.LabTest.Lab')}
            className={`col-2 ${
              location.pathname === quickLinkAddress[3] ? 'selected' : ''
            }`}
          >
            {quickLinkOption[3].map((v, i) => (
              <NavDropdown.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(`${v.split(' ').join('')}-link`)
                    .click()
                }}
              >
                {t(`HeaderNavbar.LabTest.${v}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </div>
        <Navbar.Brand
          className="col-3"
          exact
          as={NavLink}
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault()
              smoothScroll(window.pageYOffset)
            } else {
              smoothScroll(window.pageYOffset)
              props.setShowLoader(true)
              if (collapse) {
                document.querySelector('.navbar-toggler').click()
              }
            }
          }}
        >
          <picture>
            <source media="(min-width: 1250px)" srcSet={logoText} />
            <source media="(max-width: 1249px)" srcSet={logo} />
            <Image src={logoText} alt="logo" />
          </picture>
        </Navbar.Brand>
        <div className="d-flex quickLink2 col-4 justify-content-evenly">
          <NavDropdown
            title={t('HeaderNavbar.Testimonial.Title')}
            className={`col-3 ${
              location.pathname === quickLinkAddress[4] ? 'selected' : ''
            }`}
          >
            {quickLinkOption[4].map((v, i) => (
              <NavDropdown.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(`${v.split(' ').join('')}-link`)
                    .click()
                }}
              >
                {t(`HeaderNavbar.Testimonial.${v}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title={t('HeaderNavbar.ProductionControlManagement.Title2')}
            className={`col-3 ${
              location.pathname === quickLinkAddress[5] ? 'selected' : ''
            }`}
          >
            {quickLinkOption[5].map((v, i) => (
              <NavDropdown.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(`${v.split(' ').join('')}-link`)
                    .click()
                }}
              >
                {t(`HeaderNavbar.ProductionControlManagement.${v}`)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link
            exact
            as={NavLink}
            activeClassName="selected"
            className="col-3"
            to="/online-service"
            onClick={(e) => {
              if (location.pathname === '/online-service') {
                e.preventDefault()
                smoothScroll(window.pageYOffset)
              } else {
                smoothScroll(window.pageYOffset)
                props.setShowLoader(true)
                if (collapse) {
                  document.querySelector('.navbar-toggler').click()
                }
              }
            }}
          >
            {t('HeaderNavbar.OnlineService.Title')}
          </Nav.Link>
          <div className="col-3 contact">
            <a
              href="mailTo:sales@easylink.com.tw?subject=(EasyWeb)"
              className="nav-link"
            >
              {t('HeaderNavbar.ContactUs.Title')}
            </a>
          </div>
        </div>
        <Navbar.Toggle
          onClick={handleToggler}
          ref={navbarTogglerRef}
          children={<span className="icon-bar"></span>}
        />
        <div
          className={collapse ? 'navbar-collapse active' : 'navbar-collapse'}
        >
          <button
            className="collapseBackground"
            onClick={() => {
              if (collapse) {
                document.querySelector('.navbar-toggler').click()
              }
            }}
          ></button>
          <NavbarList
            location={location}
            languageRef={languageRef}
            setLanguage={setLanguage}
            openLanguageList={openLanguageList}
            handleLanguage={handleLanguage}
            setShowLoader={props.setShowLoader}
            t={t}
            changeLanguage={changeLanguage}
            languageAry={languageAry}
            languageCodeAry={languageCodeAry}
            optionRef={optionRef}
            option={option}
            address={address}
            navbarListAry={navbarListAry}
            setShowNavbar={setShowNavbar}
            collapse={collapse}
            setTestimonialContent={props.setTestimonialContent}
            setHashID={props.setHashID}
          />
        </div>
      </Navbar>
    </header>
  )
}

export default Header2

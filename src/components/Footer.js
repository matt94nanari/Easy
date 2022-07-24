import React from 'react'
import { withRouter, Link, useLocation } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import logoText from '../images/other/logoText.svg'
import Title from '../components/Title'
var Scroll = require('react-scroll')
var scroll = Scroll.animateScroll
const FooterContent = ({ location, setTestimonialContent }) => {
  const { t } = useTranslation()
  return (
    <div className="d-flex flex-wrap">
      <div className="information col-lg-6 col-12">
        <div className="d-flex flex-wrap" data-aos="fade-right">
          <div className="col-sm-6 col-9 logo">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                  scroll.scrollToTop()
                }
              }}
            >
              <Image src={logoText} alt="logo" fluid />
            </Link>
          </div>
          <div className="email">
            <a href="mailTo:sales@easylink.com.tw?subject=(EasyWeb)">
              <p className="mail">{t('Footer.ContactUs')}</p>
            </a>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="facility col-sm-6 col-12" data-aos="zoom-out">
            <div className="navigation">
              <p>{t('Footer.Navigation.AreaNavigation.Title')}</p>
              <ul>
                <li>
                  <Link
                    to="/facility"
                    onClick={(e) => {
                      if (location.pathname === '/facility') {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {t('Footer.Navigation.AreaNavigation.Facility')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tooling"
                    onClick={(e) => {
                      if (location.pathname === '/tooling') {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {t('Footer.Navigation.AreaNavigation.Tooling')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/optical-robot-sorting"
                    onClick={(e) => {
                      if (location.pathname === '/optical-robot-sorting') {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {t('Footer.Navigation.AreaNavigation.Optical&RobotSorting')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packing-storage"
                    onClick={(e) => {
                      if (location.pathname === '/packing-storage') {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {t('Footer.Navigation.AreaNavigation.Packing&Storage')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="quality col-sm-6 col-12" data-aos="zoom-out">
            <div className="navigation">
              <p>{t('Footer.Navigation.Products&Quality.Title')}</p>
              <ul>
                <li>
                  <Link
                    to="/products"
                    onClick={(e) => {
                      if (location.pathname === '/products') {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {t('Footer.Navigation.Products&Quality.Products')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/production-control-management"
                    onClick={(e) => {
                      if (
                        location.pathname === '/production-control-management'
                      ) {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {
                      t(
                        'Footer.Navigation.Products&Quality.ProductionControl&ManageMent'
                      ).split('#')[0]
                    }
                    <br />
                    {
                      t(
                        'Footer.Navigation.Products&Quality.ProductionControl&ManageMent'
                      ).split('#')[1]
                    }
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lab-test"
                    onClick={(e) => {
                      if (location.pathname === '/lab-test') {
                        e.preventDefault()
                        scroll.scrollToTop()
                      }
                    }}
                  >
                    {t('Footer.Navigation.Products&Quality.Lab')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial col-lg-6 col-12">
        <Link
          to="/testimonial"
          onClick={(e) => {
            if (location.pathname === '/testimonial') {
              e.preventDefault()
              scroll.scrollToTop()
            }
          }}
        >
          <Title
            text={t('Footer.Testimonial.Title')}
            col={`col-12`}
            aos={`fade-left`}
          />
        </Link>
        <ul className="d-flex flex-wrap my-5 button-list">
          <li className="me-3 mb-3">
            <Link
              data-aos="zoom-in"
              to="/testimonial"
              onClick={(e) => {
                setTestimonialContent('email')
                if (location.pathname === '/testimonial') {
                  e.preventDefault()
                  scroll.scrollToTop()
                }
              }}
            >
              {t('Footer.Testimonial.Email')}
            </Link>
          </li>
          <li className="me-3 mb-3">
            <Link
              data-aos="zoom-in"
              to="/testimonial"
              onClick={(e) => {
                setTestimonialContent('score card')
                if (location.pathname === '/testimonial') {
                  e.preventDefault()
                  scroll.scrollToTop()
                }
              }}
            >
              {t('Footer.Testimonial.ScoreCard')}
            </Link>
          </li>
          <li className="me-3 mb-3">
            <Link
              data-aos="zoom-in"
              to="/testimonial"
              onClick={(e) => {
                setTestimonialContent('audit')
                if (location.pathname === '/testimonial') {
                  e.preventDefault()
                  scroll.scrollToTop()
                }
              }}
            >
              {t('Footer.Testimonial.Audit')}
            </Link>
          </li>
        </ul>
        <div className="contact-info" data-aos="zoom-out">
          <h4>{t('Footer.ContactInfo.Title')}</h4>
          <ul>
            <li className="my-3">
              <AiFillPhone
                style={{ fontSize: '1.5rem', marginRight: '10px' }}
              />{' '}
              {t('Footer.ContactInfo.Phone')}
            </li>
            <li className="my-3">
              <a href="mailTo:sales@easylink.com.tw?subject=(EasyWeb)">
                <AiOutlineMail
                  style={{ fontSize: '1.5rem', marginRight: '10px' }}
                />{' '}
                {t('Footer.ContactInfo.Email')}
              </a>
            </li>
            <li className="d-flex">
              <div>
                <HiLocationMarker
                  style={{ fontSize: '1.5rem', marginRight: '15px' }}
                />
              </div>
              <p>{t('Footer.ContactInfo.Address')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
const FooterContent2 = ({ location }) => {
  const { t } = useTranslation()
  return (
    <>
      <div className="footer-pri ms-2 col-lg-8 col-md-10 col-11">
        <div
          className="d-flex flex-wrap justify-content-between"
          data-aos="fade-right"
        >
          <Link
            to="/about-easylink"
            onClick={(e) => {
              if (location.pathname === '/about-easylink') {
                e.preventDefault()
                scroll.scrollToTop()
              }
            }}
          >
            <p>{t('Footer.AboutEasylink')}</p>
          </Link>
          <Link
            to="/employee-garden"
            onClick={(e) => {
              if (location.pathname === '/employee-garden') {
                e.preventDefault()
                scroll.scrollToTop()
              }
            }}
          >
            <p>{t('Footer.EmployeeGarden')}</p>
          </Link>
          <Link
            to="/csr"
            onClick={(e) => {
              if (location.pathname === '/csr') {
                e.preventDefault()
                scroll.scrollToTop()
              }
            }}
          >
            <p>{t('Footer.CSR')}</p>
          </Link>
        </div>
      </div>
      <hr className="my-3" data-aos="zoom-in" />
      <div className="footer-sec">
        <ul className="d-flex flex-wrap justify-content-center">
          <li>
            <a
              href="https://www.facebook.com/Easylink-Industrial-Co-Ltd-532419996798110/"
              target="_blank"
              rel="noreferrer"
              className="nav-link facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/easylink-industrial-co-ltd/"
              target="_blank"
              rel="noreferrer"
              className="nav-link linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <ul className="d-flex flex-wrap justify-content-center">
          <li>
            <Link to="/privacy-policy" className="privatePolicy">
              {t('Footer.PrivatePolicy')}
            </Link>
          </li>
          <li className="copyright">{t('Footer.CopyRight')}</li>
        </ul>
      </div>
    </>
  )
}
function Footer(props) {
  const location = useLocation()
  return (
    <>
      <footer className="footer">
        <Container>
          <FooterContent
            location={location}
            setTestimonialContent={props.setTestimonialContent}
          />
          <FooterContent2 location={location} />
        </Container>
      </footer>
    </>
  )
}
export default withRouter(Footer)

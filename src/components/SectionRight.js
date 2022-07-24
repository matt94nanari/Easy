import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Carousel } from 'react-bootstrap'
import WindowWidth from './WindowWidth'
import ImageLoader from '../components/ImageLoader'
const SectionRight = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  const [width, height] = WindowWidth()
  useEffect(() => {
    if (width <= 991) {
      handleClose()
    }
  }, [width])
  const {
    section,
    id,
    title,
    description,
    description2,
    image1,
    image2,
    imageName1,
    imageName2,
    imgAry,
    placeholderAry,
    placeholder1,
    placeholder2,
  } = props
  const contentFuncMobile = () => {
    return typeof description === 'object' ? (
      <>
        {description2 ? <p className="description">{description2}</p> : ''}
        <ul className="description col-12">
          {description.map((v, i) => (
            <li className="col-md-3 col-6" key={i}>
              <p>{v}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p className="description">{description}</p>
    )
  }
  const contentFunc = () => {
    return typeof description === 'object' ? (
      <>
        {description2 ? <p className="description">{description2}</p> : ''}
        <ul className="description col-12">
          {description.map((v, i) => (
            <li className="col-xl-5 col-lg-6" key={i}>
              <p>{v}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p className="description">{description}</p>
    )
  }
  return (
    <section
      className={`${section} section-right d-flex justify-content-between flex-wrap`}
      id={id}
    >
      <div
        className="textArea-mobile col-sm-10 col-12 d-none"
        data-aos="fade-right"
      >
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="content">{contentFuncMobile()}</div>
      </div>
      <div
        className="col-xl-7 col-lg-6 d-flex align-items-center justify-content-center carousel-desk"
        data-aos="fade-right"
      >
        {imgAry ? (
          <Carousel variant="dark" interval={5000} fade>
            {imgAry.map((v, i) => (
              <Carousel.Item key={i}>
                <div className="p-4">
                  <ImageLoader
                    src={v}
                    alt={`pics${i + 1}`}
                    placeholder={placeholderAry[i]}
                    onClick={() => {
                      if (width > 991) {
                        handleShow()
                        handleSelect(i)
                      } else {
                        return
                      }
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <ImageLoader
            src={image1}
            alt={imageName1}
            placeholder={placeholder1}
            onClick={() => {
              if (width > 991) {
                handleShow()
                handleSelect(1)
              } else {
                return
              }
            }}
          />
        )}
      </div>
      <div
        className="col-md-10 col-sm-11 col-12 carousel-mobile d-none mx-auto"
        data-aos="zoom-in"
      >
        {imgAry ? (
          <Carousel variant="dark" interval={5000} controls={false} fade>
            {imgAry.map((v, i) => (
              <Carousel.Item key={i}>
                <div className="p-4">
                  <ImageLoader
                    src={v}
                    alt={`pics${i + 1}`}
                    placeholder={placeholderAry[i]}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Carousel controls={false} interval={5000} fade>
            <Carousel.Item>
              <div className="p-4">
                <ImageLoader
                  src={image1}
                  alt={imageName1}
                  placeholder={placeholder1}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="p-4">
                <ImageLoader
                  src={image2}
                  alt={imageName2}
                  placeholder={placeholder2}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        )}
      </div>
      <div className="textArea-desk col-xl-5 col-lg-6" data-aos="fade-left">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="content">
          {image2 ? (
            <div className="photo col-lg-8">
              <ImageLoader
                src={image2}
                alt={imageName2}
                placeholder={placeholder2}
                onClick={() => {
                  if (width > 991) {
                    handleShow()
                    handleSelect(0)
                  } else {
                    return
                  }
                }}
              />
            </div>
          ) : (
            ''
          )}
          {contentFunc()}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        {imgAry ? (
          <Carousel
            className="carousel-in-modal home"
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
            fade
          >
            {imgAry.map((v, i) => (
              <Carousel.Item key={i}>
                <ImageLoader
                  src={v}
                  alt={`pic${i + 1}`}
                  placeholder={placeholderAry[i]}
                />
                <div>
                  <p className="text">{title}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Carousel
            className="carousel-in-modal home"
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
            fade
          >
            <Carousel.Item>
              <ImageLoader
                src={image2}
                alt={imageName2}
                placeholder={placeholder2}
              />
              <div>
                <p className="text">{title}</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <ImageLoader
                src={image1}
                alt={imageName1}
                placeholder={placeholder1}
              />
              <div>
                <p className="text">{title}</p>
              </div>
            </Carousel.Item>
          </Carousel>
        )}
      </Modal>
    </section>
  )
}

export default withRouter(SectionRight)

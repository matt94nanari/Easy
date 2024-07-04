import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ImageLoader from './ImageLoader'
import { Link } from 'react-router-dom'
function DragCarousel(props) {
  const { dateAry, newsAry, imgAry, linkAry, responsive, placeholder } = props
  return (
    <Carousel
      responsive={responsive}
      className="content"
      autoPlay={true}
      infinite={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      autoPlaySpeed={5000}
      showDots={true}
    >
      {imgAry.map((v, i) => (
        <div className="d-flex flex-wrap justify-content-center" key={i}>
          {imgAry ? (
            <div className="photo">
              <ImageLoader
                src={imgAry[i]}
                alt={`photo${i + 1}`}
                className={`col-8`}
                placeholder={placeholder}
                onClick={() => {
                  document
                    .querySelector(`.${linkAry[i].split('/')[1] + (i + 1)}`)
                    .click()
                }}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="text col-8 mt-5 mx-auto">
            {linkAry ? (
              <Link
                to={linkAry[i]}
                className={`${linkAry[i].split('/')[1] + (i + 1)}`}
              >
                {newsAry ? <h4 className="news">{newsAry[i]}</h4> : <></>}
                {dateAry ? <p className="date">{dateAry[i]}</p> : <></>}
              </Link>
            ) : (
              <>
                <h4 className="news">{v}</h4>
                {dateAry ? <p className="date">{dateAry[i]}</p> : <></>}
              </>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default DragCarousel

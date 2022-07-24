import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import Title from '../components/Title'
import { withRouter, Link, useParams, Redirect } from 'react-router-dom'
import ImageLoader from '../components/ImageLoader'
import technicalCornerSafety from '../images/aboutEasy/technicalCorner-safety.webp'
import technicalCornerBlindRivetSetting from '../images/aboutEasy/technicalCorner-BlindRivetSetting.webp'
import technicalCornerOrderTracking from '../images/aboutEasy/technicalCorner-orderTracking.webp'
import technicalCornerOrderTracking2 from '../images/aboutEasy/technicalCorner-orderTracking2.webp'
import technicalCornerOrderTracking3 from '../images/aboutEasy/technicalCorner-orderTracking3.webp'
import technicalCornerOrderTracking4 from '../images/aboutEasy/technicalCorner-orderTracking4.webp'
import technicalCornerNewPacking from '../images/aboutEasy/technicalCorner-newPacking.webp'
import technicalCornerNewPacking2 from '../images/aboutEasy/technicalCorner-newPacking2.jpg'
import technicalCornerShearBolt from '../images/aboutEasy/technicalCorner-shearBolt.webp'
import technicalCornerShearBolt2 from '../images/aboutEasy/technicalCorner-shearBolt2.webp'
import technicalCornerShearBolt3 from '../images/aboutEasy/technicalCorner-shearBolt3.webp'
import technicalCornerMisMatched from '../images/aboutEasy/technicalCorner-mismatched.webp'
import technicalCornerMisMatched2 from '../images/aboutEasy/technicalCorner-mismatched2.webp'
import technicalCornerMisMatched3 from '../images/aboutEasy/technicalCorner-mismatched3.webp'
import technicalCornerMisMatched4 from '../images/aboutEasy/technicalCorner-mismatched4.webp'
import technicalCornerMisMatched5 from '../images/aboutEasy/technicalCorner-mismatched5.webp'
import technicalCornerMisMatched6 from '../images/aboutEasy/technicalCorner-mismatched6.webp'
import technicalCornerSafetyPlaceholder from '../images/aboutEasy/technicalCorner-safety-placeholder.webp'
import technicalCornerBlindRivetSettingPlaceholder from '../images/aboutEasy/technicalCorner-BlindRivetSetting-placeholder.webp'
import technicalCornerOrderTrackingPlaceholder from '../images/aboutEasy/technicalCorner-orderTracking-placeholder.webp'
import technicalCornerOrderTracking2Placeholder from '../images/aboutEasy/technicalCorner-orderTracking2-placeholder.webp'
import technicalCornerOrderTracking3Placeholder from '../images/aboutEasy/technicalCorner-orderTracking3-placeholder.webp'
import technicalCornerOrderTracking4Placeholder from '../images/aboutEasy/technicalCorner-orderTracking4-placeholder.webp'
import technicalCornerNewPackingPlaceholder from '../images/aboutEasy/technicalCorner-newPacking-placeholder.webp'
import technicalCornerNewPacking2Placeholder from '../images/aboutEasy/technicalCorner-newPacking2-placeholder.jpg'
import technicalCornerShearBoltPlaceholder from '../images/aboutEasy/technicalCorner-shearBolt-placeholder.webp'
import technicalCornerShearBolt2Placeholder from '../images/aboutEasy/technicalCorner-shearBolt2-placeholder.webp'
import technicalCornerShearBolt3Placeholder from '../images/aboutEasy/technicalCorner-shearBolt3-placeholder.webp'
import technicalCornerMisMatchedPlaceholder from '../images/aboutEasy/technicalCorner-mismatched-placeholder.webp'
import technicalCornerMisMatched2Placeholder from '../images/aboutEasy/technicalCorner-mismatched2-placeholder.webp'
import technicalCornerMisMatched3Placeholder from '../images/aboutEasy/technicalCorner-mismatched3-placeholder.webp'
import technicalCornerMisMatched4Placeholder from '../images/aboutEasy/technicalCorner-mismatched4-placeholder.webp'
import technicalCornerMisMatched5Placeholder from '../images/aboutEasy/technicalCorner-mismatched5-placeholder.webp'
import technicalCornerMisMatched6Placeholder from '../images/aboutEasy/technicalCorner-mismatched6-placeholder.webp'
function TechnicalCorner(props) {
  const { t } = useTranslation()
  const imgAry = [
    technicalCornerSafety,
    null,
    technicalCornerBlindRivetSetting,
    [
      technicalCornerOrderTracking,
      technicalCornerOrderTracking2,
      technicalCornerOrderTracking3,
      technicalCornerOrderTracking4,
    ],
    [technicalCornerNewPacking, technicalCornerNewPacking2],
    [
      technicalCornerShearBolt,
      technicalCornerShearBolt2,
      technicalCornerShearBolt3,
    ],
    [
      technicalCornerMisMatched,
      technicalCornerMisMatched2,
      technicalCornerMisMatched3,
      technicalCornerMisMatched4,
      technicalCornerMisMatched5,
      technicalCornerMisMatched6,
    ],
  ]
  const placeholderAry = [
    technicalCornerSafetyPlaceholder,
    null,
    technicalCornerBlindRivetSettingPlaceholder,
    [
      technicalCornerOrderTrackingPlaceholder,
      technicalCornerOrderTracking2Placeholder,
      technicalCornerOrderTracking3Placeholder,
      technicalCornerOrderTracking4Placeholder,
    ],
    [
      technicalCornerNewPackingPlaceholder,
      technicalCornerNewPacking2Placeholder,
    ],
    [
      technicalCornerShearBoltPlaceholder,
      technicalCornerShearBolt2Placeholder,
      technicalCornerShearBolt3Placeholder,
    ],
    [
      technicalCornerMisMatchedPlaceholder,
      technicalCornerMisMatched2Placeholder,
      technicalCornerMisMatched3Placeholder,
      technicalCornerMisMatched4Placeholder,
      technicalCornerMisMatched5Placeholder,
      technicalCornerMisMatched6Placeholder,
    ],
  ]
  const urlAry = [
    '/technical-corner/1',
    '/technical-corner/2',
    '/technical-corner/3',
    '/technical-corner/4',
    '/technical-corner/5',
    '/technical-corner/6',
    '/technical-corner/7',
  ]
  const [image, setImage] = useState(null)
  const [placeholder, setPlaceholder] = useState(null)
  const [linkPrevious, setLinkPrevious] = useState(`/technical-corner/1`)
  const [linkNext, setLinkNext] = useState(`/technical-corner/2`)
  const [warning, setWarning] = useState('')
  const { technicalCornerPages } = useParams()
  useEffect(() => {
    const imgAry = [
      technicalCornerSafety,
      null,
      technicalCornerBlindRivetSetting,
      [
        technicalCornerOrderTracking,
        technicalCornerOrderTracking2,
        technicalCornerOrderTracking3,
        technicalCornerOrderTracking4,
      ],
      [technicalCornerNewPacking, technicalCornerNewPacking2],
      [
        technicalCornerShearBolt,
        technicalCornerShearBolt2,
        technicalCornerShearBolt3,
      ],
      [
        technicalCornerMisMatched,
        technicalCornerMisMatched2,
        technicalCornerMisMatched3,
        technicalCornerMisMatched4,
        technicalCornerMisMatched5,
        technicalCornerMisMatched6,
      ],
    ]
    const placeholderAry = [
      technicalCornerSafetyPlaceholder,
      null,
      technicalCornerBlindRivetSettingPlaceholder,
      [
        technicalCornerOrderTrackingPlaceholder,
        technicalCornerOrderTracking2Placeholder,
        technicalCornerOrderTracking3Placeholder,
        technicalCornerOrderTracking4Placeholder,
      ],
      [
        technicalCornerNewPackingPlaceholder,
        technicalCornerNewPacking2Placeholder,
      ],
      [
        technicalCornerShearBoltPlaceholder,
        technicalCornerShearBolt2Placeholder,
        technicalCornerShearBolt3Placeholder,
      ],
      [
        technicalCornerMisMatchedPlaceholder,
        technicalCornerMisMatched2Placeholder,
        technicalCornerMisMatched3Placeholder,
        technicalCornerMisMatched4Placeholder,
        technicalCornerMisMatched5Placeholder,
        technicalCornerMisMatched6Placeholder,
      ],
    ]
    setImage(imgAry[parseInt(technicalCornerPages) - 1])
    setPlaceholder(placeholderAry[parseInt(technicalCornerPages) - 1])
  }, [])
  useEffect(() => {
    props.setGreenHeaderStyle(true)
    const imgAry = [
      technicalCornerSafety,
      null,
      technicalCornerBlindRivetSetting,
      [
        technicalCornerOrderTracking,
        technicalCornerOrderTracking2,
        technicalCornerOrderTracking3,
        technicalCornerOrderTracking4,
      ],
      [technicalCornerNewPacking, technicalCornerNewPacking2],
      [
        technicalCornerShearBolt,
        technicalCornerShearBolt2,
        technicalCornerShearBolt3,
      ],
      [
        technicalCornerMisMatched,
        technicalCornerMisMatched2,
        technicalCornerMisMatched3,
        technicalCornerMisMatched4,
        technicalCornerMisMatched5,
        technicalCornerMisMatched6,
      ],
    ]
    const urlAry = [
      '/technical-corner/1',
      '/technical-corner/2',
      '/technical-corner/3',
      '/technical-corner/4',
      '/technical-corner/5',
      '/technical-corner/6',
      '/technical-corner/7',
    ]
    if (urlAry.indexOf(props.location.pathname) > 0) {
      if (
        imgAry[parseInt(technicalCornerPages) - 1] &&
        Array.isArray(imgAry[parseInt(technicalCornerPages) - 1]) === false
      ) {
        setImage(imgAry[parseInt(technicalCornerPages) - 1])
      } else {
        setImage(null)
      }
      setLinkPrevious(`/technical-corner/${parseInt(technicalCornerPages) - 1}`)
      setLinkNext(`/technical-corner/${parseInt(technicalCornerPages) + 1}`)
    }
  }, [props, technicalCornerPages])
  if (urlAry.indexOf(props.location.pathname) < 0) {
    return (
      <>
        <Redirect to="/page-not-found" />
      </>
    )
  }
  const photo = () => {
    if (image !== null && technicalCornerPages === '1') {
      return (
        <div className="photo d-flex flex-wrap justify-content-center">
          <div className="col-md-6 col-sm-8 my-5 text-center">
            <ImageLoader
              src={image}
              alt={`technical Corner`}
              placeholder={placeholder}
            />
          </div>
        </div>
      )
    } else if (image !== null && technicalCornerPages === '3') {
      return (
        <div className="photo d-flex flex-wrap justify-content-center">
          <div className="col-md-8 col-sm-10 my-5 text-center">
            <ImageLoader
              src={image}
              alt={`technical Corner`}
              placeholder={placeholder}
            />
          </div>
        </div>
      )
    }
  }
  const textArea = () => {
    if (technicalCornerPages === '1') {
      return (
        <div className="textArea">
          <Title
            text={t('AboutEasylink.TechnicalCorner.Corner1.Title')}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner1.Content')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner1.Content2')}
          </p>
          {t('AboutEasylink.TechnicalCorner.Corner1.Content3') ? (
            <>
              <h2 className="col-lg-8 col-10 mx-auto my-5 text-center">
                <span className="lightGreen">
                  {
                    t('AboutEasylink.TechnicalCorner.Corner1.Content3').split(
                      '-'
                    )[0]
                  }
                </span>
                {
                  t('AboutEasylink.TechnicalCorner.Corner1.Content3').split(
                    '-'
                  )[1]
                }
                <span className="lightGreen">
                  {
                    t('AboutEasylink.TechnicalCorner.Corner1.Content3').split(
                      '-'
                    )[2]
                  }
                </span>
              </h2>
              <ul className="content col-lg-8 col-10 mx-auto mt-3 mb-5">
                <li className="my-3">
                  {t('AboutEasylink.TechnicalCorner.Corner1.Rule1')}
                </li>
                <li className="my-3">
                  {t('AboutEasylink.TechnicalCorner.Corner1.Rule2')}
                </li>
                <li className="my-3">
                  {t('AboutEasylink.TechnicalCorner.Corner1.Rule3')}
                </li>
                <li className="my-3">
                  {t('AboutEasylink.TechnicalCorner.Corner1.Rule4')}
                </li>
              </ul>
              <p className="content col-lg-8 col-10 mx-auto my-3">
                {t('AboutEasylink.TechnicalCorner.Corner1.Content4')}
              </p>
              <p className="content col-lg-8 col-10 mx-auto mt-3 mb-5">
                {t('AboutEasylink.TechnicalCorner.Corner1.Content5')}
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      )
    } else if (technicalCornerPages === '2') {
      return (
        <div className="textArea pt-5">
          <Title
            text={t('AboutEasylink.TechnicalCorner.Corner2.Title')}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner2.Content')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner2.Content2')}
          </p>
          <h2 className="col-lg-8 col-10 mx-auto mt-5 mb-3 text-center">
            {t('AboutEasylink.TechnicalCorner.Corner2.Content3').split('#')[0]}
            <span className="lightGreen">
              {
                t('AboutEasylink.TechnicalCorner.Corner2.Content3').split(
                  '#'
                )[1]
              }
            </span>
            {t('AboutEasylink.TechnicalCorner.Corner2.Content3').split('#')[2]}
          </h2>
          <ul className="content col-lg-8 col-10 mx-auto my-5">
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner2.List1')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner2.List2')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner2.List3')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner2.List4')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner2.List5')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner2.List6')}
            </li>
          </ul>
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner2.Content4')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner2.Content5')}
          </p>
        </div>
      )
    } else if (technicalCornerPages === '3') {
      return
    } else if (technicalCornerPages === '4') {
      return (
        <div className="textArea pt-5">
          <Title
            text={t('AboutEasylink.TechnicalCorner.Corner4.Title')}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner4.Content')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner4.Content2')}
          </p>
          <ul className="content col-lg-8 col-10 mx-auto my-5">
            <li className="my-5">
              {t('AboutEasylink.TechnicalCorner.Corner4.List1')}
            </li>
            <li className="my-5">
              {t('AboutEasylink.TechnicalCorner.Corner4.List2')}
              <br />
              <br />
              <ImageLoader
                src={imgAry[3][0]}
                alt={`pic1`}
                placeholder={placeholderAry[3][0]}
              />
            </li>
            <li className="my-5">
              {t('AboutEasylink.TechnicalCorner.Corner4.List3')}
              <br />
              <br />
              <ImageLoader
                src={imgAry[3][1]}
                alt={`pic2`}
                placeholder={placeholderAry[3][1]}
              />
            </li>
          </ul>
          <h2 className="col-lg-8 col-10 mx-auto my-5 text-center">
            {t('AboutEasylink.TechnicalCorner.Corner4.Content3')}
          </h2>
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner4.Content4')}
            <br />
            <br />
            <ImageLoader
              src={imgAry[3][2]}
              alt={`pic3`}
              placeholder={placeholderAry[3][2]}
            />
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner4.Content5')}
            <br />
            <br />
            <ImageLoader
              src={imgAry[3][3]}
              alt={`pic4`}
              placeholder={placeholderAry[3][3]}
            />
          </p>
        </div>
      )
    } else if (technicalCornerPages === '5') {
      return (
        <div className="textArea pt-5">
          <Title
            text={t('AboutEasylink.TechnicalCorner.Corner5.Title')}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner5.Content')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner5.Content2')}
            <span className="lightGreen">
              {t('AboutEasylink.TechnicalCorner.Corner5.Content3')}
            </span>
            <br />
            <br />
            <br />
            <br />
            <ImageLoader
              src={imgAry[4][0]}
              alt={`pic1`}
              placeholder={placeholderAry[4][0]}
            />
            <br />
            <br />
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner5.Content4')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner5.Content5')}
            <br />
            <br />
            <br />
            <br />
            <ImageLoader
              src={imgAry[4][1]}
              alt={`pic2`}
              placeholder={placeholderAry[4][1]}
            />
            <br />
            <br />
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner5.Content6')}
            <br />
            <br />
          </p>
        </div>
      )
    } else if (technicalCornerPages === '6') {
      return (
        <div className="textArea pt-5">
          <Title
            text={t('AboutEasylink.TechnicalCorner.Corner6.Title')}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            {t('AboutEasylink.TechnicalCorner.Corner6.Content')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner6.Content2')}
            <br />
            <br />
            <ImageLoader
              src={imgAry[5][0]}
              alt={`pic1`}
              placeholder={placeholderAry[5][0]}
            />
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner6.Content3')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner6.Content4')}
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner6.Content5')}
            <span className="lightGreen">
              {t('AboutEasylink.TechnicalCorner.Corner6.Standard')}
            </span>
            {t('AboutEasylink.TechnicalCorner.Corner6.Content6')}
            <span className="lightGreen">
              {t('AboutEasylink.TechnicalCorner.Corner6.Content7')}
            </span>
            <br />
            <br />
            <ImageLoader
              src={imgAry[5][1]}
              alt={`pic2`}
              placeholder={placeholderAry[5][1]}
            />
            <br />
            <br />
            {t('AboutEasylink.TechnicalCorner.Corner6.Content8')}
            <span className="lightGreen">
              {t('AboutEasylink.TechnicalCorner.Corner6.Standard')}
            </span>{' '}
            {t('AboutEasylink.TechnicalCorner.Corner6.Content9')}
          </p>
          <ol className="content col-lg-8 col-10 mx-auto my-5">
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner6.List1')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner6.List2')}
            </li>
            <li className="my-3">
              {t('AboutEasylink.TechnicalCorner.Corner6.List3')}
              <br />
              <br />
              <ImageLoader
                src={imgAry[5][2]}
                alt={`pic3`}
                placeholder={placeholderAry[5][2]}
              />
            </li>
          </ol>
        </div>
      )
    } else {
      return (
        <>
          <div className="textArea pt-5">
            <Title
              text={t('AboutEasylink.TechnicalCorner.Corner7.Title')}
              justifyContent={`justify-content-center`}
              col={`col-lg-8 col-10`}
            />
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 mt-5 mb-3">
                <h2 className="mb-4">
                  <span className="lightGreen">
                    {t('AboutEasylink.TechnicalCorner.Corner7.Title2')}
                  </span>
                </h2>
                <p className="content">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content')}
                </p>
              </div>
              <div className="offset-md-1 col-lg-3 col-md-4 col-6 mt-5 mb-3">
                <ImageLoader
                  src={imgAry[6][0]}
                  alt={`pic1`}
                  placeholder={placeholderAry[6][0]}
                />
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 my-3">
                <h2 className="mb-4">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content2')}
                  <span className="lightGreen">
                    {t('AboutEasylink.TechnicalCorner.Corner7.Title2')}
                  </span>
                </h2>
                <ul className="content">
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List1')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List2')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List3')}
                  </li>
                </ul>
              </div>
              <div className="offset-md-1 col-lg-3 col-md-4 col-6 my-3">
                <ImageLoader
                  src={imgAry[6][1]}
                  alt={`pic2`}
                  placeholder={placeholderAry[6][1]}
                />
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 my-3">
                <h2 className="mb-4">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content3')}
                  <span className="lightGreen">
                    {t('AboutEasylink.TechnicalCorner.Corner7.Title2')}
                  </span>{' '}
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content4')}
                </h2>
                <ul className="content">
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List4')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List5')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List6')}
                  </li>
                </ul>
              </div>
              <div className="offset-md-1 col-lg-3 col-md-4 col-6 my-3">
                <ImageLoader
                  src={imgAry[6][2]}
                  alt={`pic3`}
                  placeholder={placeholderAry[6][2]}
                />
              </div>
              <div className="my-3 col-10">
                <p className="content">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content5')}
                </p>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 col-8 my-3">
                <h2 className="mb-4">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content6')}
                </h2>
                <p className="content">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content7')}
                </p>
                <ul className="content">
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List7')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List8')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List9')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List10')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List11')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List12')}
                  </li>
                </ul>
              </div>
              <div className="offset-md-1 col-lg-3 col-md-4 col-6 my-3">
                <ImageLoader
                  src={imgAry[6][3]}
                  alt={`pic4`}
                  placeholder={placeholderAry[6][3]}
                />
              </div>
              <div className="my-3 col-10">
                <p className="content">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content8')}
                  <br />
                  <br />
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content9')}
                </p>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 my-3">
                <h2 className="mb-4">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content10')}
                </h2>
                <ul className="content">
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List13')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List14')}
                  </li>
                </ul>
              </div>
              <div className="offset-md-1 col-lg-3 col-md-4 col-6 my-3">
                <ImageLoader
                  src={imgAry[6][4]}
                  alt={`pic5`}
                  placeholder={placeholderAry[6][4]}
                />
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 my-3">
                <h2 className="mb-4">
                  {t('AboutEasylink.TechnicalCorner.Corner7.Content11')}
                </h2>
                <ul className="content">
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List15')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List16')}
                  </li>
                  <li className="my-3">
                    {t('AboutEasylink.TechnicalCorner.Corner7.List17')}
                  </li>
                </ul>
              </div>
              <div className="offset-md-1 col-lg-3 col-md-4 col-6 my-3">
                <ImageLoader
                  src={imgAry[6][5]}
                  alt={`pic6`}
                  placeholder={placeholderAry[6][5]}
                />
              </div>
            </div>
          </div>
        </>
      )
    }
  }
  return (
    <>
      <Helmet>
        <title>
          {t('AboutEasylink.TechnicalCorner.Title')} | {t('Home.HTMLTitle')}
        </title>
        <meta
          property="og:title"
          content={t('AboutEasylink.TechnicalCorner.Title')}
        />
      </Helmet>
      <main>
        <section className="technicalCornerSection1">
          <BannerButton color={`darkGreen`} location={`left`}>
            {t('AboutEasylink.TechnicalCorner.Title')}
          </BannerButton>
          {photo()}
          {textArea()}
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-wrap col-lg-4 col-md-6 col-sm-8 col-10 justify-content-between">
              <Link
                to={linkPrevious}
                onClick={(e) => {
                  if (props.location.pathname === '/technical-corner/1') {
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
                  if (props.location.pathname === '/technical-corner/7') {
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

export default withRouter(TechnicalCorner)

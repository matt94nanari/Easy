import { Helmet } from 'react-helmet-async'
// import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import BannerButton from '../components/BannerButton'
import Title from '../components/Title'
import { withRouter, Link, useParams, Redirect } from 'react-router-dom'
import ImageLoader from '../components/ImageLoader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ListAllTechnicalCornerDetails,
  ListAllTechnicalCornerDetailsAsync,
} from '../actions'
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
  const { technicalCornerPages } = useParams()
  const {
    technicalCornerDetails,
    allTechnicalCornerDetails,
    ListAllTechnicalCornerDetails,
    ListAllTechnicalCornerDetailsAsync,
  } = props
  // const { t } = useTranslation()
  useEffect(() => {
    ListAllTechnicalCornerDetails()
    ListAllTechnicalCornerDetailsAsync()
  }, [technicalCornerPages])
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
  const titileAry = [
    '#Safety at #Easylink workPlace',
    '#On-line Technical Consulting Service (TCS)',
    '#Upgraded Order Tracking System',
    '#Blind #Rivet setting Tool',
    '#New Packing machine for #small #package box, bucket',
    '#Shear #Bolt - Discountinuity Acceptance Criteria Test',
    '#MIS #MATCHED THREADS & #BLANK THREADS',
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
  const [title, setTitle] = useState(titileAry[0])
  const [linkPrevious, setLinkPrevious] = useState(`/technical-corner/1`)
  const [linkNext, setLinkNext] = useState(`/technical-corner/2`)
  const [warning, setWarning] = useState('')
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
    const titileAry = [
      '#Safety at #Easylink Workplace',
      '#On-line Technical Consulting Service (TCS)',
      '#Upgraded Order Tracking System',
      '#Blind #Rivet setting Tool',
      '#New Packing machine for #small #package box, bucket',
      '#Shear #Bolt - Discountinuity Acceptance Criteria Test',
      '#MIS #MATCHED THREADS & #BLANK THREADS',
    ]
    setImage(imgAry[parseInt(technicalCornerPages) - 1])
    setPlaceholder(placeholderAry[parseInt(technicalCornerPages) - 1])
    setTitle(titileAry[parseInt(technicalCornerPages) - 1])
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
    const titileAry = [
      '#Safety at #Easylink Workplace',
      '#Online Technical Consulting Service (TCS)',
      '#Blind #Rivet setting Tool',
      '#Upgraded Order Tracking System',
      '#New Packing machine for #small #package box, bucket',
      '#Shear #Bolt Discountinuity Acceptance Criteria Test',
      '#MIS #MATCHED THREADS & #BLANK THREADS',
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
      setTitle(titileAry[parseInt(technicalCornerPages) - 1])
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
            text={title}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            Every visitor is required to use “protection kits” like gloves, ear
            plugs and safety glasses while in our production areas. Each area is
            painted with “yellow” lines to indicate safe walking areas.
            <br />
            <br />
            At Easylink on-site workplace safety is extremely important to us.
            We place a great deal of importance on the safety of our employees
            and visitors. We are committed to maintaining a safe environment for
            our workers. Together, we can eliminate unsafe situations and strive
            for an accident-free workplace on a daily basis.
          </p>
          <h2 className="col-lg-8 col-10 mx-auto my-5 text-center">
            <span className="lightGreen">Everyone</span> who has agreed to work
            for Easylink{' '}
            <span className="lightGreen">implicitly agrees to:</span>
          </h2>
          <ul className="content col-lg-8 col-10 mx-auto mt-3 mb-5">
            <li className="my-3">
              Follow safety rules and procedures exactly, and ask questions if
              job is not understood.
            </li>
            <li className="my-3">
              Be responsible for his/her own safety and the safety of other
              employees.
            </li>
            <li className="my-3">
              Report all injures/incidents to the supervisor or safety with in
              24 hours no matter how minor.
            </li>
            <li className="my-3">
              Regard safety as an important part of getting your job done
            </li>
          </ul>
          <p className="content col-lg-8 col-10 mx-auto my-3">
            Since 2010, we have increased our Safety staff from one to three
            people. Our safety professionals are prepared to continuously
            improve and advance our efforts and dedication to safety.
          </p>
          <p className="content col-lg-8 col-10 mx-auto mt-3 mb-5">
            At Easylink, management ensures that all employees are reminded
            often of the high value that we place on workplace safety and their
            responsibility of contributing to the success of safety in our
            company.
          </p>
        </div>
      )
    } else if (technicalCornerPages === '2') {
      return (
        <div className="textArea pt-5">
          <Title
            text={title}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            Easylink is glad to announce its new on-line TCS (Technical
            Consulting Service) to our customers. As experts on the fastener
            production and design in many industries, our dedicated team
            provides full support on new design fasteners and best solution to
            solve your current assembly issue.
            <br />
            <br />
            To reserve consulting hours is very simple, simply send us an email
            sales@easylink.com.tw with subject “Request TCS” and state the issue
            or provide the relevant data you would like to discuss about before
            every Friday. We will arrange technical consulting net-meeting on
            the following weekday or arrange a convenient day to suit both
            parties ASAP.
          </p>
          <h2 className="col-lg-8 col-10 mx-auto mt-5 mb-3 text-center">
            Our <span className="lightGreen">technical consultant</span> group
            included:
          </h2>
          <ul className="content col-lg-8 col-10 mx-auto my-5">
            <li className="my-3">Fasteners quality certified engineers</li>
            <li className="my-3">Fasteners production specialists</li>
            <li className="my-3">Industrial communication specialists</li>
            <li className="my-3">Quality managers and inspectors</li>
            <li className="my-3">Application engineers</li>
            <li className="my-3">Metallurgists</li>
          </ul>
          <p className="content col-lg-8 col-10 mx-auto my-5">
            Our technical consultant group consists of fastener production
            engineers and technical experts who possess years of experience and
            capability to offer proposals to optimize fastener design in shape,
            material and finish.
            <br />
            <br />
            In addition to maintain original product concept, it maintains or
            even enhances its ability of performance and yet lower its cost. The
            TCS will be free of charge and expect to be launched in July 2022.
            We hope this new service will be a useful tool for you and looking
            forward to have the opportunity to serve and solve your problem.
          </p>
        </div>
      )
    } else if (technicalCornerPages === '3') {
      return
    } else if (technicalCornerPages === '4') {
      return (
        <div className="textArea pt-5">
          <Title
            text={title}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            The Order Tracking System has been upgraded to provide improved
            quicker response and easier access.
            <br />
            <br />
            You can check current order status 24/7 utilizing our easy web
            access.
          </p>
          <ul className="content col-lg-8 col-10 mx-auto my-5">
            <li className="my-5">
              Browser speed has been improved for significantly quicker
              response.
            </li>
            <li className="my-5">
              With the added ETD query, Customers no longer need to wait over
              night for an e-mail reply, no more time difference
              <br />
              <br />
              <ImageLoader
                src={imgAry[3][0]}
                alt={`pic1`}
                placeholder={placeholderAry[3][0]}
              />
            </li>
            <li className="my-5">
              Show more specific order details in quick view.
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
            How to Use the Order Tracking System?
          </h2>
          <p className="content col-lg-8 col-10 mx-auto my-5">
            Click "Online Service" in the Navbar, and then click the 'Inventory'
            button.
            <br />
            <br />
            <ImageLoader
              src={imgAry[3][2]}
              alt={`pic3`}
              placeholder={placeholderAry[3][2]}
            />
            <br />
            <br />
            Key in Your ID & password to login.
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
            text={title}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            To support increasing small packaging requirements, Easylink
            (Vietnam) has invested in auto packaging to improve efficiencies and
            reduce packing time.
            <br />
            <br />
            Applied Type:{' '}
            <span className="lightGreen">Paper box, Plastic bucket.</span>
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
            Efficiency: 600~840 packets / hour
            <br />
            <br />
            Weight: ~ 5 kg / packet
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
            Please contact your sales representative for detail. We will
            continue to provide new progress on automation packaging capability
            in 3 months.
            <br />
            <br />
          </p>
        </div>
      )
    } else if (technicalCornerPages === '6') {
      return (
        <div className="textArea pt-5">
          <Title
            text={title}
            justifyContent={`justify-content-center`}
            col={`col-lg-8 col-10`}
          />
          <p className="content col-lg-8 col-10 mx-auto my-5">
            Typically used on applications that require the highest level of
            security, these premium security bolts feature a hexagonal part
            attached to the top of the head of the bolt that is fastened using a
            standard spanner or socket: they don't require any special tools.
            <br />
            <br />
            As the name suggests, once the bolt is tightened passed its maxinum
            torque limit, the hexagonal section snaps off leaving a smooth,
            tamper proof head.
            <br />
            <br />
            <ImageLoader
              src={imgAry[5][0]}
              alt={`pic1`}
              placeholder={placeholderAry[5][0]}
            />
            <br />
            <br />
            Security Shear Bolts are suitable for high torque applications and
            are most often used within the construction, aerospace and
            automotive industries sectors.
            <br />
            <br />
            <br />
            <br />
            They are ideal for use with their matching Shear Nuts while
            fasteneing. Should there be any issue with the shear bolt
            requirement of "fine" thread, which in some cases can cause some
            proportion threads damage during the process.
            <br />
            <br />
            We review the thread damage, by applying{' '}
            <span className="lightGreen">ASTM F788/F788M </span>
            discontinued Torque test to see if thread position is acceptable and
            <span className="lightGreen"> no impact to functional use.</span>
            <br />
            <br />
            <ImageLoader
              src={imgAry[5][1]}
              alt={`pic2`}
              placeholder={placeholderAry[5][1]}
            />
            <br />
            <br />
            According to <span className="lightGreen">
              ASTM F788F/788M
            </span>{' '}
            specifications of discontinuity acceptance criteria on M8-1.25 6h
            requires 0.5N-m Max torque force. Hereunder are the check-step we
            proceed to check on threads.
          </p>
          <ol className="content col-lg-8 col-10 mx-auto my-5">
            <li className="my-3">
              Use adjustable GO/NO gage to check on the threads situation
            </li>
            <li className="my-3">
              Use VICE to hold shear bolt tied gently then apply digi-
              electronical wrench to check on the torque value.
            </li>
            <li className="my-3">
              With M8-1.25 6h accepts 0.5N-m as the max. Torque and the value we
              check is within the discountinuity acceptance criteria.
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
              text={title}
              justifyContent={`justify-content-center`}
              col={`col-lg-8 col-10`}
            />
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 mt-5 mb-3">
                <h2 className="mb-4">
                  <span className="lightGreen">MIS-MATCHED THREADS</span>
                </h2>
                <p className="content">
                  When operating thread rolling process for machine screw, there
                  is small chance of mis-matched threads will occur; however
                  once it happen, no sorting equipment can detect this problem.
                  One mis-matched threads screw used in automatic assembly line
                  will lead the whole assembly line to shut-down and cause great
                  loss!
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
                  FEW FACTS OF{' '}
                  <span className="lightGreen">MIS-MATCHED THREADS</span>
                </h2>
                <ul className="content">
                  <li className="my-3">
                    Mis-matched threads appear to be vertical on a portion of
                    threads, thus it's obscure to be detected.
                  </li>
                  <li className="my-3">
                    Optical sorting machine can't detect the partial abnormal
                    threads.
                  </li>
                  <li className="my-3">
                    Screw with mis-matched threads is not functional in
                    practice.
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
                  HOW DOES{' '}
                  <span className="lightGreen">MIS-MATCHED THREADS</span> OR
                  BLANK THREADS TAKE PLACE?
                </h2>
                <ul className="content">
                  <li className="my-3">
                    When burrs or tiny debris stuck in the middle of thread
                    rolling die, the die surface become slippery.
                  </li>
                  <li className="my-3">Abnormal thread rolling process.</li>
                  <li className="my-3">Other unknown factors.</li>
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
                  Above conditions caused the screw rolling move upward or
                  downward on the die and created mis-matched threads or blank
                  threads.
                </p>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 col-8 my-3">
                <h2 className="mb-4">SOLUTION</h2>
                <p className="content">As seen on left-side photo</p>
                <ul className="content">
                  <li className="my-3">
                    The blue area code C,D are thread rolling dies
                  </li>
                  <li className="my-3">
                    Code A is the upper electrical conductive board
                  </li>
                  <li className="my-3">
                    Code B is the lower electrical conductive board
                  </li>
                  <li className="my-3">Code E is the groove</li>
                  <li className="my-3">
                    Red arrow shown where the screw been pushed forward
                  </li>
                  <li className="my-3">
                    Green arrow is where screw been rolled up or down.
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
                  During thread rolling process, screws will move forward to the
                  red arrow direction; when previously described conditions
                  occur, screw been pushed upward or downward will touch the
                  conductive boards A or B,
                  <br />
                  <br />
                  the operation will stopped automatically and red light be on,
                  the operator must remove the bad threads screw in order to
                  re-start rolling process.
                </p>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center my-3">
              <div className="col-lg-6 col-md-5 col-10 my-3">
                <h2 className="mb-4">THE ADVANTAGES</h2>
                <ul className="content">
                  <li className="my-3">
                    With our new device installed on rolling machine, there will
                    be 100% Free of Mis-matched threads problem.
                  </li>
                  <li className="my-3">
                    The upper conductive board can control no blank threads
                    occur.
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
                <h2 className="mb-4">CONCLUSION</h2>
                <ul className="content">
                  <li className="my-3">
                    This new device prevents screws from having blank threads or
                    mis-matched threads.
                  </li>
                  <li className="my-3">
                    Also prevent any form of bad threads.
                  </li>
                  <li className="my-3">
                    Your auto-assembly line is assured to run more efficiently,
                    save cost by decreasing machine down time.
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
        <title>Technical Corner | Easylink Industrial CO.,LTD.</title>
      </Helmet>
      <main>
        <section className="technicalCornerSection1">
          <BannerButton color={`darkGreen`} location={`left`}>
            Technical Corner
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
                    setWarning('This is the latest news.')
                  }
                }}
              >
                Previous
              </Link>
              <Link
                to={linkNext}
                onClick={(e) => {
                  if (props.location.pathname === '/technical-corner/7') {
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
    technicalCornerDetails: store.technicalCornerDetails,
    allTechnicalCornerDetails: store.allTechnicalCornerDetails,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ListAllTechnicalCornerDetails,
      ListAllTechnicalCornerDetailsAsync,
    },
    dispatch
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TechnicalCorner))

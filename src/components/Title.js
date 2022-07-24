import { useState } from 'react'
import { Image, Modal } from 'react-bootstrap'

export default function Title(props) {
  const text = props.text.split('-')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div
      className={`title d-flex ${
        props.justifyContent ? props.justifyContent : ''
      }`}
      data-aos={props.aos ? props.aos : ''}
    >
      <div className={props.col}>
        {text.map((v, i) => {
          return (
            <p key={i} className="py-0 my-0">
              {v.split(' ').map((v2, i2) => (
                <span key={i2}>
                  {v2.includes('#') ? (
                    <>
                      {v2.split('#')[0] ? (
                        <span>{' ' + v2.split('#')[0]}</span>
                      ) : (
                        ''
                      )}
                      {v2.split('#')[1].includes('%') ? (
                        <>
                          <span className="lightGreen">
                            {' ' + v2.split('#')[1].split('%')[0]}
                          </span>
                          <span>{v2.split('#')[1].split('%')[1]}</span>
                        </>
                      ) : (
                        <span className="lightGreen">
                          {' ' + v2.split('#')[1]}
                        </span>
                      )}
                    </>
                  ) : (
                    ' ' + v2
                  )}
                </span>
              ))}
            </p>
          )
        })}
      </div>
      {props.photo ? (
        <>
          <div className="photo">
            <Image
              alt="photo"
              src={props.photo}
              fluid
              onClick={() => {
                handleShow()
              }}
            />
          </div>
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Image alt="photo" src={props.photo} fluid />
          </Modal>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

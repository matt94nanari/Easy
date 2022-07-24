import { CSSTransition } from 'react-transition-group'
function Loader(props) {
  return (
    <>
      <CSSTransition
        classNames="loader"
        in={props.showLoader}
        timeout={1000}
        // unmountOnExit
      >
        <div className="loader"></div>
      </CSSTransition>
    </>
  )
}

export default Loader

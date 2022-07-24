import { Image } from 'react-bootstrap'

export default function Icons(props) {
  return (
    <div className={props.iconName + ' icons'}>
      <div className="outsideBorder"></div>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer noopener"
        className={props.text ? 'text' : ''}
      >
        {props.src ? (
          <Image
            className={props.imgName}
            alt={props.imgName}
            src={props.src}
            fluid
          />
        ) : (
          ''
        )}
        {props.children || ''}
      </a>
    </div>
  )
}

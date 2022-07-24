import { useState, useEffect } from 'react'
import { Image as BootstrapImage } from 'react-bootstrap'

function ImageLoader(props) {
  const { src, alt, placeholder, onClick, className } = props
  const [sourceLoaded, setSourceLoaded] = useState(null)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])
  return (
    <BootstrapImage
      src={sourceLoaded || placeholder}
      alt={alt}
      className={
        sourceLoaded
          ? `img-thumbnail loaded ${className ? className : ''}`
          : `placeholder loading ${className ? className : ''}`
      }
      onClick={onClick ? onClick : null}
    />
  )
}

export default ImageLoader

import React from 'react'
import './Loader.css'

function Loader(props) {
  const size = props.size;
  const modifiedSize = {
    'width': size + 'px',
    'height': size + 'px',
  }

  return (
    <span className="loader" style={modifiedSize}>
    </span>
  )
}

export default Loader
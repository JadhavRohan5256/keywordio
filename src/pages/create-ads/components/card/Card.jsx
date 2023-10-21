import React, { useState } from 'react'
import './Card.css'

function Card(props) {
  const {changeValue, animate, defaultValue} = props;
  const [ischeck, setIsCheck] = useState(defaultValue)

  const onChangeHandler = () => {
    setIsCheck(!ischeck);
    changeValue(!ischeck);
  }

  return (
    <div className={`card-wrapper ${animate ? 'animate' : null}`} onClick={() => onChangeHandler()}>
        <div className='card-top'>
          <input 
              type='checkbox'
              name='checkbox'
              className='checkbox'
              onChange={() => setIsCheck(!ischeck)}
              checked={ischeck}
          />
        </div>
        <div className='card-bottom'>
          <p>Create</p>
          <h3>Text Ad</h3>
        </div>
    </div>
  )
}

export default Card
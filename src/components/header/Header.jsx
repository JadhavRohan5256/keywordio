import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='nav-wrapper'>
        <div className='nav container'>
          <div className='nav-left'>
            <h2 className='logo'>App Logo</h2>
          </div>
          <ul className='nav-right'>
            <li>
              <Link to=''>dashboard</Link>
            </li>
            <li>
              <Link to='/create_ads'>create ads</Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Header
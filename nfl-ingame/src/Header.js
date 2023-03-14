
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
}

  return (
    <div className='header'>
        <img onClick={handleClick} className='header-logo' src='sideline-PhotoRoom.png' alt=''/>
        <div className='header-nav'>
            <div className='header-nav-1'><Link to= '/' className='header-link'><span>Home</span></Link></div>
            <div className='header-nav-1'><Link to='/login' className='header-link'><span>Login</span></Link></div>
            <div className='header-nav-1'><Link to='/profile' className='header-link'><span>Profile</span></Link></div>
            <div className='header-nav-account'>
              <div className='header-nav-1 header-nav-account-btn'>
            <span>Account</span>
            <div className='header-nav-account-dropdown'>
              <Link to='/settings' className='header-link'><span>Settings</span></Link>
              <Link to='/logout' className='header-link'><span>Logout</span></Link>
            </div>
          </div>
        </div>              
        </div>
    </div>
  )
}

export default Header
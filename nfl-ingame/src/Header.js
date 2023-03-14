
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { getAuth, signOut } from "firebase/auth";

function Header() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [isLoggingOut, setIsLoggingOut] = useState(false);
    const handleSignOut = () => {
      setIsLoggingOut(true);
      
      if (user) {signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    }).catch((error) => {
      // An error happened.
      console.error("An error happened: ", error);
    }).finally(() => {
      setIsLoggingOut(false);
    });}
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
}

  return (
    <div className='header'>
        <img onClick={handleClick} className='header-logo' src='sideline-PhotoRoom.png' alt=''/>
        <div className='header-nav'>
            <div className='header-nav-1'><Link to= '/' className='header-link'><span>Home</span></Link></div>
            <div className='header-nav-1'>
          {isLoggingOut ? (
            <span>Loading...</span>
          ) : (
            <Link to={!user ? '/login' : '/'} className='header-link'><span onClick={handleSignOut}>{user ? 'Logout' : 'Login'}</span></Link>
          )}
        </div>
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
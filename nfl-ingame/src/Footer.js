import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <footer>
        <div className="container">
                <div className="column">
                    <h3>About NewOnline</h3>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={"/about"}><span>About Us</span></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><span>Contact Us</span></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/privacy">Privacy Policy</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/terms'>Terms and Condition</Link>   
                </div>
               
                <div className="column">
                    <h3>Account</h3>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/account">My Account</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/forgot">Forgot Password</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/details">Personal Details</Link>    
                </div>
                <div className="column">
                    <h3>Help & Support</h3>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/help">Help Center</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/report">Report a Problem</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/faq">Frequently Asked Questions</Link>  
                </div>
                <div className="column">
                    <h3>Social Media</h3>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/facebook">
                            <img className='social__image' src='facebook.jpg' alt=''/>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/google">
                            <img className='social__image' src='google.jpg' alt=''/>
                        </Link>
                </div>
            </div>
        
        </footer>
        <button className='back__to__top'>Back to Top</button>
    </div>
  )
}

export default Footer
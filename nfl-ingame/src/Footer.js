import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

    const handleScrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
  return (
    <div className='footer'>
        <div className='footer-cont'>
        <div className="container-f">
                <div className="column">
                    <h3>About SideX</h3>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={"/about-us"}><span>About Us</span></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact-us"><span>Contact Us</span></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/privacy">Privacy Policy</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/terms-and-conditions'>Terms and Condition</Link>   
                </div>
               
                
                <div className="column">
                    <h3>Help & Support</h3>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/help">Help Center</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/forgot">Forgot Password</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/faq">Frequently Asked Questions</Link>  
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
            <button className='back__to__top' onClick={handleScrollTop}></button>
        </div>
        
    </div>
  )
}

export default Footer
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-cont'>
      <h1>Contact Us</h1>
  <h2>Business and Marketing Team</h2>
  <ul>
    <img src='tk1.jpeg' alt=''/>
    <li>Tanaka Mbavarira - Chief Executive Officer</li>
    <img src='jam.jpeg' alt=''/>
    <li>Jamerya Kelley - Chief Marketing Officer</li>
    <img src='pur.jpeg' alt=''/>
    <li>Purity Gumede - Business Development Manager</li>
  </ul>
  <h2>Engineering and Tech Team</h2>
  <ul>
    <img src='jack.jpeg' alt=''/>
    <li>Jackson Kakwenya - Chief Technology Officer</li>
    <img src='elton.JPG' alt=''/>
    <li>Elton Muchadeyi Mombeshora - Lead Software Engineer</li>
    <img src='brandy.jpeg' alt=''/>
    <li>Brandy Barron - UX Designer</li>
    <img src='jero.jpeg' alt=''/>
    <li>Jerome Adonis - Database Administrator</li>
  </ul>
    </div>
  )
}

export default Contact

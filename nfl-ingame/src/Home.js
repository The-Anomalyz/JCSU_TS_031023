import React from 'react';
import ImageList from './ImageList';

import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  const images = [
      {
        id: 1,
        src: 'playerview.jpeg',
        alt: 'streaming options',
        title:'Go Pro LIVE Play',
        link: '/go-pro',
      },
      {
        id: 2,
        src: 'camd.png',
        alt: 'camedup',
        title: "Cam'd Up",
        link: '/camedup',
      },
      {
        id: 3,
        src: 'socialchat.png',
        title: 'Social Chat',
        alt: 'chat',
        link: '/chat',
      },
  ];

  return (
    <div className='home-bottom'>
      <h1>Viewing Options</h1>
      <ImageList images={
      images} />
    
    
      <div className="news-container">
        <h2>Recent News</h2>
        
          <div className="container">
            <div className='container-1'><Link to={'https://www.nfl.com/news'}>NFL news website</Link></div>
            <div className='container-1'><Link to={'https://www.espn.com/nfl/'}>ESPN NFL news</Link></div>
            <div className='container-1'><Link to={'https://bleacherreport.com/nfl'}>Bleacher Report NFL news</Link></div>           
          </div>
        
      </div>
    </div>
  )
}

export default Home

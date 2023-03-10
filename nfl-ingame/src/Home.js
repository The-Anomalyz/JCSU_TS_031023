import React from 'react';
import ImageList from './ImageList';
import Videos from './Videos';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  const images = [
      {
        id: 1,
        src: 'playerview.jpg',
        alt: 'Image 1',
        link: '/page1',
      },
      {
        id: 2,
        src: 'sidelineview.jpg',
        alt: 'Image 2',
        link: '/page2',
      },
      {
        id: 3,
        src: 'coachview.jpg',
        alt: 'Image 3',
        link: '/page3',
      },
  ];

  return (
    <div className='home-bottom'>
      <h1>Select Your Experience</h1>
      <ImageList images={
      images} />

      <Videos />
    
    
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

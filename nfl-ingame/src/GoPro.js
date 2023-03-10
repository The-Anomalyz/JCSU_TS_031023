import React from 'react'
import './GoPro.css'
import ImageList from './ImageList';
import Videos from './Videos';
import { Link } from 'react-router-dom'

function GoPro() {
    const images = [
        {
          id: 1,
          src: 'playerview.jpg',
          alt: 'Player View Mode',
          title:'Player View Mode',
          link: 'https://www.youtube.com/watch?v=Lbo5KAPM7wg',
        },
        {
          id: 2,
          src: 'sidelineview.jpg',
          alt: 'Sideline View Mode',
          title: 'Sideline View Mode',
          link: 'https://www.youtube.com/watch?v=PWe1KY8HOCg',
        },
        {
          id: 3,
          src: 'coachview.jpg',
          title: 'Coach View Mode',
          alt: 'Coach View Mode',
          link: 'https://www.youtube.com/watch?v=EhKb_6rnnEo&t=1s',
        },
    ];
  
  return (
    <div className='gopro-bottom'>
      <h1>Select Your Experience</h1>
      <ImageList images={
      images} />

      <Videos />
    
    
      <div className="news-container">
        <h2>Recent News</h2>
        
          <div className="gopro-container">
            <div className='gopro-container-1'><Link to={'https://www.nfl.com/news'}>NFL news website</Link></div>
            <div className='gopro-container-1'><Link to={'https://www.espn.com/nfl/'}>ESPN NFL news</Link></div>
            <div className='gopro-container-1'><Link to={'https://bleacherreport.com/nfl'}>Bleacher Report NFL news</Link></div>           
          </div>
        
      </div>
    </div>
  )
}

export default GoPro
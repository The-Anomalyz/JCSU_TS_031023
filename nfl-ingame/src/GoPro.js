import React from 'react'
import './GoPro.css'
import ImageList from './ImageList';

import { Link } from 'react-router-dom'

function GoPro() {
    const images = [
        {
          id: 1,
          src: 'DALL·E 2023-03-10 04.50.21.png',
          alt: 'Player View Mode',
          title:'Player View Mode',
          link: 'https://www.youtube.com/watch?v=Lbo5KAPM7wg',
        },
        {
          id: 2,
          src: 'sidelines.png',
          alt: 'Sideline View Mode',
          title: 'Sideline View Mode',
          link: 'https://www.youtube.com/watch?v=PWe1KY8HOCg',
        },
        {
          id: 3,
          src: 'coachesView.png',
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
    
    
      <div className="news-container-gopro">
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

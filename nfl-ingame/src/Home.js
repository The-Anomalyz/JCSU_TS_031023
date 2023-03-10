import React from 'react';
import ImageList from './ImageList';
import Videos from './Videos';

function Home() {

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
    <div>
      <h1>Select Your Experience</h1>
      <ImageList images={
      images} />

      
    
    
      <div className="news-container">
        <h2>Recent News</h2>
        <ul>
          <div class="container">
            <div class="box">
              <a href="https://www.nfl.com/news" target="_blank" rel="noreferrer">
                NFL news website
              </a>
            </div>
              
            <div class="box"> 
              <a href="https://www.espn.com/nfl/" target="_blank" rel="noreferrer">
                ESPN NFL news
              </a>
            </div> 

            <div class="box"> 
              <a href="https://bleacherreport.com/nfl" target="_blank" rel="noreferrer">
                Bleacher Report NFL news
              </a>
            </div> 

          </div>
        </ul>
      </div>
    </div>
  )
}

export default Home

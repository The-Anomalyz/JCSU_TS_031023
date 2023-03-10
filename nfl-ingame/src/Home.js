import React from 'react';
import ImageList from './ImageList';
import Videos from './Videos';

function Home() {

  const images = [
      {
        id: 1,
        src: 'playerView.png',
        alt: 'Image 1',
        link: '/page1',
      },
      {
        id: 2,
        src: 'pngkit_nfl-football-png_1748776.png',
        alt: 'Image 2',
        link: '/page2',
      },
      {
        id: 3,
        src: 'png-clipart-american-football-football-player-nfl-nfl-football-action-shots-sports-equipment-competition-event-thumbnail.png',
        alt: 'Image 3',
        link: '/page3',
      },
  ];

  return (
    <div>
      <h1>Select Your Experience</h1>
      <ImageList images={images} />

      <Videos />
    
    
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

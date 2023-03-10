import React from 'react';

function VideoSection() {
  const handleClick = (link) => {
    window.location.href = link; // Redirect to the link when clicked
  };

  return (
    <div>
      <h2 onClick={() => handleClick('/videos')}>Latest Videos</h2>
      <div className="video-container">
        <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iNL9FcjfrEk" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
        </div>
        <div className="video-wrapper">
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/LU4lREMVaUI" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
        
        </div>
        <div className="video-wrapper">
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/Fg8T_xuOvPA" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

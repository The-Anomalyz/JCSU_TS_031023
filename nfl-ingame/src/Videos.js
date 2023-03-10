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
          <iframe
            title="Video 1"
            src="https://www.youtube.com/watch?v=LU4lREMVaUI"
            allowFullScreen
          />
        </div>
        <div className="video-wrapper">
          <iframe
            title="Video 2"
            src="https://www.youtube.com/watch?v=xiVwRYsmwAE"
            allowFullScreen
          />
        </div>
        <div className="video-wrapper">
          <iframe
            title="Video 3"
            src="https://www.youtube.com/watch?v=Fg8T_xuOvPA"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

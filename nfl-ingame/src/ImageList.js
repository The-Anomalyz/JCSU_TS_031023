import React from 'react';

function ImageList({ images }) {
  return (
    <div>
      {images.map((image) => (
        <a href={image.link} key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ maxWidth: '200px', maxHeight: '200px',
            width: '200px',
            height: '300px', padding: '10px'
          }} // add CSS styles here
            
          />
        </a>
      ))}
    </div>
  );
}

export default ImageList;

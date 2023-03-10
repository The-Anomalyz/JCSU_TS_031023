import React from 'react';

function ImageList({ images }) {
  return (
    <div>
      {images.map((image) => (
        <a href={image.link} key={image.id} style={{ display: 'inline-block' }} >
          <img
            src={image.src}
            alt={image.alt}
            style={{ maxWidth: '400px', maxHeight: '200px',
            width: '320px',
            height: '300px', padding: '10px',
          }
        } // add CSS styles here
          />
          <figcaption>{image.title}</figcaption>
        </a>
      ))}
    </div>
  );
}

export default ImageList;

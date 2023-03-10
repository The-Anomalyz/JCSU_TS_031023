import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <a href={image.link} key={image.id}>
          <img src={image.src} alt={image.alt} className="image" />
        </a>
      ))}
    </div>
  );
};

export default ImageList;

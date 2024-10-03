import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt?image.alt: 'image'}
      height={image.height?image.height: '500px'}
      src={image.src} // use normal <img> attributes as props
      width={image.width?image.width: '500px'} />
    <span>{image.caption?image.caption: 'Image Caption'}</span>
  </div>
);

export default LazyImage;
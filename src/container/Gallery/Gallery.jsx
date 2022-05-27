import React, { useRef } from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const gallleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery_content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="app__header__p_gallery">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery_images">
        <div className="app__gallery_images_container" ref={scrollRef}>
          {gallleryImages.map((image, index) => (
            <div className="app__gallery_images_card flex__center" key={index}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__images_icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery_images_arrows">
          <BsArrowLeftShort
            className="app__gallery_images_arrow_icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="app__gallery_images_arrow_icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us...</h1>
      <div className="app__wrapper_content">
        <p
          className="app__header__p"
          style={{ maxWidth: '500px', margin: '2rem 0' }}
        >
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className="p__cormorant"
          style={{ color: '#DCCA87', marginBottom: '1rem' }}
        >
          Opening Hours
        </p>
        <p className="app__header__p" style={{ color: '#fff' }}>
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="app__header__p" style={{ color: '#fff' }}>
          Sat - Sun: 10:00 am - 03:00 am
        </p>
        <button className="custom__button" style={{ marginTop: '3rem' }}>
          View Us
        </button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;

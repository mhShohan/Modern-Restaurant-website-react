import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="app__header__p" style={{ fontStyle: 'italic' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="app__header__p" style={{ fontStyle: 'italic' }}>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{' '}
        </p>
      </div>
      <div className="app__chef-sign">
        <h1 className="headtext__cormorant">Kevin Luo</h1>
        <p className="p__cormorant">Chef & Founder</p>
        <img src={images.sign} alt="chef_sign" />
      </div>
    </div>
  </div>
);

export default Chef;

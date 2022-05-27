import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="chase the new falvour" />
      <h1 className="app__header__h1">The key to find dining</h1>
      <p className=" app__header__p" style={{ margin: '1rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Banner" />
    </div>
  </div>
);

export default Header;

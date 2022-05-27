import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__sepecialmenu flex__center section__padding" id="menu">
    <div className="app__sepecialmenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__sepecialmenu_menu">
      <div className="app__sepecialmenu_menu_wine">
        <p className="app__sepecialmenu_menu_heading">Wine & Beer</p>
        <div className="app__sepecialmenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={index} item={wine} />
          ))}
        </div>
      </div>
      <div className="app__sepecialmenu_menu_img">
        <img src={images.menu} alt="Menu" />
      </div>
      <div className="app__sepecialmenu_menu_cocktails">
        <p className="app__sepecialmenu_menu_heading">cocktails</p>
        <div className="app__sepecialmenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} item={cocktail} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '1rem' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;

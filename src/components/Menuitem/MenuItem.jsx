import React from 'react';

import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { title, price, tags } = item;
  return (
    <div className="app__menuItem">
      <div className="app__menuItem_head">
        <div className="app__menuItem_name">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>
            {title}
          </p>
        </div>
        <div className="app__menuItem_name_dash" />
        <div className="app__menuItem_price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuItem_tags">
        <p className="p__cormorant" style={{ color: '#AAA' }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;

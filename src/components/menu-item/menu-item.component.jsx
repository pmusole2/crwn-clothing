import React from 'react';
import './menu-item.style.scss';

export const MenuItem = ({ section }) => {
  const { title, imageUrl, size } = section;
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

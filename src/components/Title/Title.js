import React from 'react';
import './Title.css';

function Title({ children, flexOrder }) {
  return <h1 className={`title ${flexOrder ? 'flex-order' : ''}`}>{children}</h1>;
}

export default Title;

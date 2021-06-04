import React from 'react';
import '../../assets/variables.css';
import './Title.css';

function Title({ children, flexOrder }) {
  return <h1 className={`ui-title ${flexOrder ? 'ui-flex-order' : ''}`}>{children}</h1>;
}

export default Title;

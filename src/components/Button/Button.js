import React from 'react';
import './Button.css';

function Button({ variantColor, location, children, ...rest }) {
  return (
    <button className={`btn btn--${variantColor} ${location}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

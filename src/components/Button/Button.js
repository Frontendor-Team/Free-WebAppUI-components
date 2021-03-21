import React from 'react';
import './Button.css';

function Button({ variantColor, children, ...rest }) {
  return (
    <button className={`btn btn--${variantColor}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

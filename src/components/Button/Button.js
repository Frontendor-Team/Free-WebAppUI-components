import React from 'react';
import './Button.css';

function Button({ color, usage, children, ...rest }) {
  return (
    <button className={`btn btn--${color} ${usage ? usage : ''}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

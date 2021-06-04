import React from 'react';
import '../../assets/variables.css';
import './Button.css';

function Button({ color, usage, children, ...rest }) {
  return (
    <button className={`ui-btn ui-btn--${color} ${usage ? usage : ''}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

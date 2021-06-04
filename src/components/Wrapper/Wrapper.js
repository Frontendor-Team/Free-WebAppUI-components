import React from 'react';
import '../../assets/variables.css';
import './Wrapper.css';

function Wrapper({ children }) {
  return <div className="ui-wrapper">{children}</div>;
}

export default Wrapper;

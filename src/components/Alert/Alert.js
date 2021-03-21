import React from 'react';
import { ReactComponent as AlertIcon } from '../../assets/Alert.svg';
import './Alert.css';

function Alert({ alertText }) {
  return (
    <div className="alert">
      <AlertIcon className="alert__icon" />
      <p className="alert__text">{alertText}</p>
    </div>
  );
}

export default Alert;

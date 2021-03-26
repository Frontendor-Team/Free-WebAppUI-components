import React from 'react';
import { ReactComponent as AlertIcon } from '../../assets/Alert.svg';
import './Alert.css';

function Alert({ alertText }) {
  return (
    <div className="alert container">
      <AlertIcon className="alert__icon" />
      <p className="alert__text">{alertText}</p>
    </div>
  );
}

Alert.defaultProps = {
  alertText: 'Your user count is at the upper limit. You should upgrade soon.',
};

export default Alert;

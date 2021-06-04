import React from 'react';
import { ReactComponent as AlertIcon } from '../../assets/Alert.svg';
import '../../assets/variables.css';
import './Alert.css';
import Container from '../Container/Container';

function Alert({ alertText }) {
  return (
    <div className="ui-alert">
      <Container>
        <AlertIcon className="ui-alert__icon" />
        <p className="ui-alert__text">{alertText}</p>
      </Container>
    </div>
  );
}

Alert.defaultProps = {
  alertText: 'Your user count is at the upper limit. You should upgrade soon.',
};

export default Alert;

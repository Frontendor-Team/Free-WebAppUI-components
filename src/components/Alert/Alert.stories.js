import React from 'react';
import Alert from './Alert';

export default {
  title: '3. Elements/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const UpgradeAlert = Template.bind({});
UpgradeAlert.args = {
  alertText: 'Your user count is at the upper limit. You should upgrade soon.',
};

import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  color: 'light',
  children: 'Upgrade Plan',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
  children: 'Add Files',
};

import React from 'react';
import Button from './Button';

export default {
  title: '3. Elements/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const PrimaryEmpty = Template.bind({});
PrimaryEmpty.args = {
  color: 'primary-empty',
  children: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  children: 'Button',
};

export const DangerEmpty = Template.bind({});
DangerEmpty.args = {
  color: 'danger-empty',
  children: 'Button',
};

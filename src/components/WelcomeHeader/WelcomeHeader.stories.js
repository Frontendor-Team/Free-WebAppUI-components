import React from 'react';
import WelcomeHeader from './WelcomeHeader';

export default {
  title: 'Top Style/WelcomeHeader',
  component: WelcomeHeader,
};

const Template = (args) => <WelcomeHeader {...args} />;

export const Welcome = Template.bind({});
Welcome.args = { name: 'Ali' };

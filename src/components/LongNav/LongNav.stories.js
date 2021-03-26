import React from 'react';
import LongNav from './LongNav';

export default {
  title: 'Top Style/LongNav',
  component: LongNav,
};

const Template = (args) => <LongNav {...args} />;

export const NavLinks = Template.bind({});
NavLinks.args = {};

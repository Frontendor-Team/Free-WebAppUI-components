import React, { useState } from 'react';
import LongNav from './LongNav';

export default {
  title: 'Top Style/LongNav',
  component: LongNav,
};

const Template = (args) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };
  return <LongNav {...args} showMenu={showMenu} toggleMenuVisibility={toggleMenuVisibility} />;
};

export const LongNavLinks = Template.bind({});
LongNavLinks.args = {
  showMenu: true,
  navItems: [
    { label: 'analytics', link: '/#' },
    { label: 'plans', link: '/#' },
    { label: 'user overview', link: '/#' },
    { label: 'invoices', link: '/#' },
    { label: 'payment details', link: '/#' },
    { label: 'billing address', link: '/#' },
  ],
};

import React, { useState } from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };
  return <Navbar {...args} showMenu={showMenu} toggleMenuVisibility={toggleMenuVisibility} />;
};

export const ShortForm = Template.bind({});
ShortForm.args = {
  showMenu: true,
  navItems: [
    { label: 'files', link: '/#' },
    { label: 'activities', link: '/#' },
    { label: 'overviews', link: '/#' },
  ],
};

export const LongForm = Template.bind({});
LongForm.args = {
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

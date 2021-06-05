import React, { useState } from 'react';
import Navbar from './Navbar';

export default {
  title: '3. Elements/Navbar',
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
  navItems: [
    { label: 'analytics', link: '#analytics' },
    { label: 'plans', link: '#plans' },
    { label: 'user overview', link: '#user-overview' },
    { label: 'invoices', link: '#invoices' },
    { label: 'payment details', link: '#payment-details' },
    { label: 'billing address', link: '#billing-address' },
  ],
};

import React, { useState } from 'react';
import LongNav from './LongNav';

export default {
  title: '1. Top Style/LongNav',
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
  navItems: [
    { label: 'analytics', link: '#analytics' },
    { label: 'plans', link: '#plans' },
    { label: 'user overview', link: '#user-overview' },
    { label: 'invoices', link: '#invoices' },
    { label: 'payment details', link: '#payment-details' },
    { label: 'billing address', link: '#billing-address' },
  ],
};

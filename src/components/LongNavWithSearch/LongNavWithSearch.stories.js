import React, { useState } from 'react';
import LongNavWithSearch from './LongNavWithSearch';

export default {
  title: 'Top Style/LongNavWithSearch',
  component: LongNavWithSearch,
};

const Template = (args) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };
  return (
    <LongNavWithSearch {...args} showMenu={showMenu} toggleMenuVisibility={toggleMenuVisibility} />
  );
};

export const NavLinksWithSearch = Template.bind({});
NavLinksWithSearch.args = {
  navItems: [
    { label: 'analytics', link: '#analytics' },
    { label: 'plans', link: '#plans' },
    { label: 'user overview', link: '#user-overview' },
    { label: 'invoices', link: '#invoices' },
    { label: 'payment details', link: '#payment-details' },
    { label: 'billing address', link: '#billing-address' },
  ],
};

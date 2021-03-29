import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const ShortForm = Template.bind({});
ShortForm.args = {
  navItems: [
    { label: 'files', link: '/files' },
    { label: 'activities', link: '/activities' },
    { label: 'overviews', link: '/overviews' },
  ],
};

export const LongForm = Template.bind({});
LongForm.args = {
  navItems: [
    { label: 'analytics', link: '/analytics' },
    { label: 'plans', link: '/plans' },
    { label: 'user overview', link: '/user-overview' },
    { label: 'invoices', link: '/invoices' },
    { label: 'payment details', link: '/payment-details' },
    { label: 'billing address', link: '/billing-address' },
  ],
  // ['analytics', 'plans', 'user overview', 'invoices', 'payment details', 'billing address'],
};

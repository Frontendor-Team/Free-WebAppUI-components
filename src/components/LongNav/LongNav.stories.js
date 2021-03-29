import React from 'react';
import LongNav from './LongNav';

export default {
  title: 'Top Style/LongNav',
  component: LongNav,
};

const Template = (args) => <LongNav {...args} />;

export const LongNavLinks = Template.bind({});
LongNavLinks.args = {
  navItems: [
    { label: 'analytics', link: '/analytics' },
    { label: 'plans', link: '/plans' },
    { label: 'user overview', link: '/user-overview' },
    { label: 'invoices', link: '/invoices' },
    { label: 'payment details', link: '/payment-details' },
    { label: 'billing address', link: '/billing-address' },
  ],
};

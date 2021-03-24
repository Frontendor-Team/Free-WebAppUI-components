import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const ShortForm = Template.bind({});
ShortForm.args = {
  links: ['files', 'activities', 'overviews'],
};

export const LongForm = Template.bind({});
LongForm.args = {
  links: ['analytics', 'plans', 'user overview', 'invoices', 'payment details', 'billing address'],
};

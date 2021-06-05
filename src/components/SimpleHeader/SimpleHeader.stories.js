import React from 'react';
import SimpleHeader from './SimpleHeader';

export default {
  title: '1. Top Style/SimpleHeader',
  component: SimpleHeader,
};

const Template = (args) => <SimpleHeader {...args} />;

export const Simple = Template.bind({});
Simple.args = { title: 'Welcome, Ali 👋' };

import React from 'react';
import ShortNav from './ShortNav';

export default {
  title: 'ShortNav',
  component: ShortNav,
};

const Template = (args) => <ShortNav {...args} />;

export const FewLinks = Template.bind({});
FewLinks.args = {};

import React from 'react';
import LongNavWithSearch from './LongNavWithSearch';

export default {
  title: 'Top Style/LongNavWithSearch',
  component: LongNavWithSearch,
};

const Template = (args) => <LongNavWithSearch {...args} />;

export const NavLinksWithSearch = Template.bind({});
NavLinksWithSearch.args = {};

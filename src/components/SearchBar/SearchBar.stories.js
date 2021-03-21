import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Searchbar = Template.bind({});
SearchBar.args = {};

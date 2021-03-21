import React from 'react';
import SearchBar from './SearchBar';
import searchIcon from '../../assets/Search.svg';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Input = Template.bind({});
Input.args = {
  placeholder: 'Search',
  icon: searchIcon,
};

import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: '3. Elements/SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Input = Template.bind({});
Input.args = {};

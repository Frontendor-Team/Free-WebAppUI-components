import React, { useState } from 'react';
import SidebarHeader from './SidebarHeader';

export default {
  title: 'SidebarHeader',
  component: SidebarHeader,
};

const Template = (args) => {
  const [showDropdown, setshowDropdown] = useState(false);
  const toggleDropdown = () => {
    setshowDropdown(!showDropdown);
  };
  return <SidebarHeader {...args} showDropdown={showDropdown} toggleDropdown={toggleDropdown} />;
};

export const Header = Template.bind({});
Header.args = {
  userName: 'Ali Boukeroui',
  dropdownListData: [
    {
      text: 'Workspace',
      link: '#workspace',
    },
    {
      text: 'Workspace_01',
      link: '#workspace_01',
    },
    {
      text: 'Workspace_02',
      link: '#workspace_02',
    },
    {
      text: 'Workspace_03',

      link: '#workspace_03',
    },
  ],
};

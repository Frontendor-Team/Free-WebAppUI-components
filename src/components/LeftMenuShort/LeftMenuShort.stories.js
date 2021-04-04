import React, { useState } from 'react';
import LeftMenuShort from './LeftMenuShort';

export default {
  title: 'Left style/LeftMenuShort',
  component: LeftMenuShort,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBarVisibility = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <LeftMenuShort
      {...args}
      showSidebar={showSidebar}
      toggleSideBarVisibility={toggleSideBarVisibility}
    />
  );
};

export const ShortMenu = Template.bind({});
ShortMenu.args = {
  sidebarData: [
    {
      text: 'Edit Profile',
      link: '/edit-profile',
    },
    {
      text: 'Change Password',
      link: '/change-password',
    },
    {
      text: 'Authentication',
      link: '/authentication',
    },
  ],
};

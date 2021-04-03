import React from 'react';
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

const Template = (args) => <LeftMenuShort {...args} />;

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

import React, { useState } from 'react';
import ShortNav from './ShortNav';

export default {
  title: 'Top Style/ShortNav',
  component: ShortNav,
};

const Template = (args) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  const [showDropdown, setshowDropdown] = useState(false);
  const toggleDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  return (
    <ShortNav
      {...args}
      showMenu={showMenu}
      toggleMenuVisibility={toggleMenuVisibility}
      showDropdown={showDropdown}
      toggleDropdown={toggleDropdown}
    />
  );
};

export const FewLinks = Template.bind({});
FewLinks.args = {
  navItems: [
    { label: 'files', link: '#files' },
    { label: 'activities', link: '#activities' },
    { label: 'overviews', link: '#overviews' },
  ],
  dropdownListData: [
    {
      text: 'Archive Files',
      link: '#archive-files',
    },
    {
      text: 'Trash Files',
      link: '#trash-files',
    },
    {
      text: 'Exported Files',

      link: '#exported-files',
    },
  ],
};

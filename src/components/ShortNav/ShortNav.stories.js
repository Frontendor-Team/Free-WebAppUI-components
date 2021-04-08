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
  return <ShortNav {...args} showMenu={showMenu} toggleMenuVisibility={toggleMenuVisibility} />;
};

export const FewLinks = Template.bind({});
FewLinks.args = {
  navItems: [
    { label: 'files', link: '#files' },
    { label: 'activities', link: '#activities' },
    { label: 'overviews', link: '#overviews' },
  ],
};

// import React, { useState } from 'react';
// import LeftMenuShort from './LeftMenuShort';

// export default {
//   title: 'Left style/LeftMenuShort',
//   component: LeftMenuShort,
//   decorators: [
//     (Story) => (
//       <div style={{ height: '100vh' }}>
//         <Story />
//       </div>
//     ),
//   ],
// };

// const Template = (args) => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const toggleSideBarVisibility = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const [selectedSubNav, setSelectedSubNav] = useState(false);

//   const toggleSubnav = (id) => {
//     if (selectedSubNav == id) {
//       return setSelectedSubNav(null);
//     }
//     setSelectedSubNav(id);
//   };

//   return (
//     <LeftMenuShort
//       {...args}
//       showSidebar={showSidebar}
//       toggleSideBarVisibility={toggleSideBarVisibility}
//       toggleSubnav={toggleSubnav}
//       selectedSubNav={selectedSubNav}
//     />
//   );
// };

// export const ShortMenu = Template.bind({});
// ShortMenu.args = {
//   sidebarData: [
//     {
//       text: 'Edit Profile',
//       link: '/#',
//     },
//     {
//       text: 'Change Password',
//       link: '/#',
//     },
//     {
//       text: 'Authentication',
//       link: '/#',
//     },
//   ],
// };

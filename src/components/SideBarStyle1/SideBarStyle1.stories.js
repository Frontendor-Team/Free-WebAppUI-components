import React from 'react';
import SideBarStyle1 from './SideBarStyle1';

export default {
  title: 'Left Style/SideBarStyle1',
  component: SideBarStyle1,
};

const Template = (args) => <SideBarStyle1 {...args} />;

export const Style1 = Template.bind({});
Style1.args = {};

// export const Style1 = Template.bind({});
// Style1.args = {
//   sidebarData: [
//     {
//       text: 'Overview',
//       icon: <Overview />,
//       link: '/overview',
//       subNav: [
//         { label: 'Analytics', path: '/analytics' },
//         { label: 'Company Benefits', path: '/company-benefits' },
//         { label: 'Time Tracking', path: '/time-tracking' },
//       ],
//     },
//     {
//       text: 'Notes',
//       icon: <Notes />,
//       link: '/notes',
//     },
//     {
//       text: 'Storage',
//       icon: <Storage />,
//       link: '/storage',
//     },
//     {
//       text: 'Messages',
//       icon: <Messages />,
//       link: '/messages',
//     },
//     {
//       text: 'Onboarding',
//       icon: <Onboarding />,
//       link: '/onboarding',
//     },
//     {
//       text: 'Settings',
//       icon: <Settings />,
//       link: '/settings',
//       subNav: [
//         { label: 'General', path: '/general' },
//         { label: 'Security', path: '/security' },
//         { label: 'Privacy', path: '/privacy' },
//         { label: 'Surveys', path: '/surveys' },
//         { label: 'Languages', path: '/languages' },
//         { label: 'Subscription', path: '/subscription' },
//       ],
//     },
//   ],
// };

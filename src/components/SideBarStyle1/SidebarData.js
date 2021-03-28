import React from 'react';
import { ReactComponent as Overview } from '../../assets/Overview.svg';
import { ReactComponent as Notes } from '../../assets/Notes.svg';
import { ReactComponent as Storage } from '../../assets/Storage.svg';
import { ReactComponent as Messages } from '../../assets/Messages.svg';
import { ReactComponent as Onboarding } from '../../assets/Onboarding.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export const SidebarData = [
  {
    text: 'Overview',
    icon: <Overview />,
    subNav: ['analytics', 'company benefits', 'time tracking'],
  },
  {
    text: 'Notes',
    icon: <Notes />,
  },
  {
    text: 'Storage',
    icon: <Storage />,
  },
  {
    text: 'Messages',
    icon: <Messages />,
  },
  {
    text: 'Onboarding',
    icon: <Onboarding />,
  },
  {
    text: 'Settings',
    icon: <Settings />,
    subNav: ['general', 'security', 'privacy', 'surveys', 'languages', 'subscription'],
  },
];

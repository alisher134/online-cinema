import {
  AlarmClockIcon,
  ClapperboardIcon,
  ClockIcon,
  HomeIcon,
  ListIcon,
  StarIcon,
  TvIcon,
} from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

import type { NavMenu } from './menuTypes';

export const MENU: NavMenu = {
  title: 'Menu',
  items: [
    {
      title: 'Home',
      link: ROUTES.appRoute,
      icon: HomeIcon,
    },
    {
      title: 'Top Rated',
      link: ROUTES.topRated,
      icon: StarIcon,
    },
    {
      title: 'Coming Soon',
      link: ROUTES.comingSoon,
      icon: AlarmClockIcon,
    },
    {
      title: 'Browse',
      link: '/browse',
      icon: ClapperboardIcon,
    },
    {
      title: 'TV Shows',
      link: '/tv-shows',
      icon: TvIcon,
    },
    {
      title: 'Movies',
      link: '/movies',
      icon: ClapperboardIcon,
    },
    {
      title: 'Genres',
      link: '/genres',
      icon: ListIcon,
    },
  ],
};

export const LIBRARY_MENU: NavMenu = {
  title: 'Library',
  items: [
    {
      title: 'Recent Played',
      link: ROUTES.recentPlayed,
      icon: ClockIcon,
    },
  ],
};

export const GENERAL_MENU: NavMenu = {
  title: 'General',
  items: [],
};

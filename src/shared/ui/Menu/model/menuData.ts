import { ClapperboardIcon, ClockIcon, HomeIcon, SearchIcon, StarIcon, TvIcon } from 'lucide-react';

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
      title: 'Search',
      link: '/search',
      icon: SearchIcon,
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

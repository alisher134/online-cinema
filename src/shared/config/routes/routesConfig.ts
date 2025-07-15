export const ROUTES = {
  appRoute: '/',
  topRated: {
    route: 'top-rated',
    page: '/top-rated',
  },
  comingSoon: {
    route: 'coming-soon',
    page: '/coming-soon',
  },
  recentPlayed: {
    route: 'recent-played',
    page: '/recent-played',
  },
  profile: {
    route: 'profile',
    page: '/profile',
    favorites: {
      route: 'favorites',
      page: '/profile/favorites',
    },
    watchLater: {
      route: 'watch-later',
      page: '/profile/watch-later',
    },
    settings: {
      route: 'settings',
      page: '/profile/settings',
    },
  },
  auth: {
    login: {
      route: 'login',
      page: '/login',
    },
    register: {
      route: 'register',
      page: '/register',
    },
  },
  help: {
    route: 'help',
    page: '/help',
  },
} as const;

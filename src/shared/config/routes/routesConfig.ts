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
      password: {
        route: 'password',
        page: '/profile/settings/password',
      },
      dataPrivacy: {
        route: 'data-privacy',
        page: '/profile/settings/data-privacy',
      },
    },
  },
  auth: {
    route: 'auth',
    page: '/auth',
    login: {
      route: 'login',
      page: '/auth/login',
    },
    register: {
      route: 'register',
      page: '/auth/register',
    },
    bySocial: {
      route: 'by-social',
      page: '/auth/by-social',
    },
  },
  help: {
    route: 'help',
    page: '/help',
  },
} as const;

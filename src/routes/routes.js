import { lazy } from 'react';

export const PublicRoutes = [
  {
    slug: '/',
    component: lazy(() => import('../pages/homepage')),
    exact: true,
  },
  {
    slug: '/about-us',
    component: lazy(() => import('../pages/aboutUs')),
    exact: true,
  },
  {
    slug: '/conact-us',
    component: lazy(() => import('../pages/conactUs')),
    exact: true,
  },
]

export const ProtectedRoutes = [
  {
    slug: '/login',
    component: lazy(() => import('../pages/login')),
    exact: true,
  },
  {
    slug: '/register',
    component: lazy(() => import('../pages/registration')),
    exact: true,
  },
];

export const AuthorizedRoutes = [
  {
    slug: '/dashboard',
    component: lazy(() => import('../pages/dashboard')),
    exact: true,
  },
  {
    slug: '/profile',
    component: lazy(() => import('../pages/dashboard')),
    exact: true,
  },
  {
    slug: '/logout',
    component: lazy(() => import('../pages/dashboard')),
    exact: true,
  },
];

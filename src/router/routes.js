
const routes = [
  {
    path: '/login',
    component: () => import('layouts/public.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/login/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/private.vue'),
    children: [
      {
        path: 'releases',
        name: 'releases-list',
        component: () => import('pages/releases/index.vue'),
      },
      {
        path: 'journalist',
        name: 'releases-list',
        component: () => import('pages/journalist/index.vue'),
      },
      {
        path: 'pressOfficer',
        name: 'releases-list',
        component: () => import('pages/pressOfficer/index.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/error404.vue'),
  });
}

export default routes;

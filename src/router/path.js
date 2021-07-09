export default [
  {
    path: '*',
    redirect: '/greetings',
  },
  {
    path: '/greetings',
    name: 'greetings',
    component: () => import('@/views/Greetings'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/Orders'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import ('@/views/Create'),
  },
];

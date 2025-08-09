import i18n from '@geniale/plugins/i18n';
import type { RouteRecordRaw } from 'vue-router';

import Home from './HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: i18n.global.t('page_home'),
    },
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('./MembersView.vue'),
    meta: {
      title: i18n.global.t('page_members'),
    },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('./ProductView.vue'),
    meta: {
      title: i18n.global.t('page_products'),
    },
  },
];

export { routes };

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
    path: '/merchandise',
    name: 'merchandise',
    component: () => import('./MerchView.vue'),
    meta: {
      title: i18n.global.t('page_merchandise'),
    },
  },
];

export { routes };

import { createRouter, createWebHashHistory } from 'vue-router';
import AppHome from '@/pages/app-home.vue';
import AppLists from '@/pages/app-lists.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/lists', component: AppLists },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Replace with your main component

const routes = [
  {
    path: '/', // Root path
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
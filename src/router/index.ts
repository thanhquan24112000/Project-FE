import HelloWorldView from '@/views/HelloWorld';
// import HomeView from '@/views/HomeView';
import Login from '@/views/Login';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      component: HelloWorldView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
});

export default router;
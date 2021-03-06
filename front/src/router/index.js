import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employees',
    name: 'list',
    component: () => import('../components/list-employee/ListEmployeeComponent'),
  },
  {
    path: '/edit-employee/:id',
    name: 'update',
    component: () => import('../components/edit-employee/EditEmployeeComponent'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completando a animação da rota do NProgress
  NProgress.done();
});

export default router

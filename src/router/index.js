import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Publish from '../views/Publish.vue';
import Works from '../views/works.vue';
import Work from '../views/work.vue';
import MyAssets from '../views/my-assets.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish,
  },
  {
    path: '/works',
    name: 'works',
    component: Works,
  },
  {
    path: '/works/:cid/:tid',
    name: 'work',
    component: Work,
  },
  {
    path: '/my/assets',
    name: 'MyAssets',
    component: MyAssets,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

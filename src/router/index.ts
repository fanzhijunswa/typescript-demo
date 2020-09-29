import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Routes from './routes'
import Layout from '@/components/Layout/index.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component:Layout,
    children : Routes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

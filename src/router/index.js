import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");

const CopyAbout = () => import(/*webpackChunkName: " CopyAbout"*/ "../views/CopyAbout.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/copy_about",
    name: "CopyAbout",
    component: CopyAbout,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router; 

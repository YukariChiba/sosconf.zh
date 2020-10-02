import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/reg",
    name: "Register",
    component: () => import("../views/Reg.vue")
  },
  {
    path: "/coop",
    name: "Cooperation",
    component: () => import("../views/Coop.vue")
  },
  {
    path: "/talks",
    name: "Talks",
    component: () => import("../views/Talks.vue")
  },
  {
    path: "/progress",
    name: "Progress",
    component: () => import("../views/Progress.vue")
  },
  {
    path: "/progress/:pid",
    name: "Progress",
    component: () => import("../views/ProgressPost.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

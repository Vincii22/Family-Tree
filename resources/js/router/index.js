import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import AboutPage from "../pages/AboutPage.vue";  // Check this path

const routes = [
  { path: "/", component: LandingPage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

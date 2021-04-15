import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route: any) => ({
      pw: route?.query?.pw,
      number: route?.query?.number,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

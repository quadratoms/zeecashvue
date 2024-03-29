import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
// import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
// import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Blank from "./views/Blank.vue";
// import NotFound from "./views/NotFound.vue";
// 
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },

  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin",
    name: "admin",
    component: Dashboard,
  },
  // {
  //   path: "/cards",
  //   name: "Cards",
  //   component: Card,
  // },
  {
    path: "/tables/:loanRef",
    name: "Tables",
    component: Tables,
  },
  // {
  //   path: "/ui-elements",
  //   name: "UIElements",
  //   component: UIElements,
  // },
  // {
  //   path: "/modal",
  //   name: "Modal",
  //   component: Modal,
  // },
  // {
  //   path: "/blank",
  //   name: "Blank",
  //   component: Blank,
  // },
  { path: '/:pathMatch(.*)', component: Blank }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

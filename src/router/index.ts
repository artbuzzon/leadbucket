import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheDeals from "@/views/TheDeals.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "deals",
    component: TheDeals
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/TheDashboard.vue")
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () =>
      import(/* webpackChunkName: "tasks" */ "../views/TheTasks.vue")
  },
  {
    path: "/stats",
    name: "stats",
    component: () =>
      import(/* webpackChunkName: "stats" */ "../views/TheStats.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "stats" */ "../views/TheSettings.vue")
  },
  {
    path: "/user-settings",
    name: "user-settings",
    component: () =>
      import(
        /* webpackChunkName: "user-settings" */ "../views/TheUserSettings.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

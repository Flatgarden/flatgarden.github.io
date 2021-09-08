import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/hakhak",
    name: "HakHak",
    component: () => import("@/views/HakHak.vue"),
  },
  {
    path: "/studiosha",
    name: "StudioSha",
    component: () => import("@/views/StudioSha.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

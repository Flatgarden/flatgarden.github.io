import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/hakhak/:dialog?",
    name: "HakHak",
    component: () => import("@/views/HakHak.vue"),
    props: true,
  },
  {
    path: "/studiosha/:dialog?",
    name: "StudioSha",
    component: () => import("@/views/StudioSha.vue"),
    props: true,
  },
  {
    path: "/:dialog?",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    props: true,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

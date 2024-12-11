import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/product/:id", component: AboutView, name: "product-detail" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

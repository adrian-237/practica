import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./Home.vue") },
  { path: "/about", component: () => import("./About.vue") },
  { path: "/checkout", component: () => import("./Checkout.vue") },
  { path: "/contact", component: () => import("./Contact.vue") },
  { path: "/shop", component: () => import("./Shop.vue") },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("./Product.vue"),
    props: true,
  },
  { path: "/cart", component: () => import("./Cart.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

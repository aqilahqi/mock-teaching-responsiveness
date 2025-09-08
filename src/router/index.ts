import { createWebHistory, createRouter } from "vue-router";

import ResponsiveView from "../pages/ResponsiveView.vue";
import NotResponsiveView from "../pages/NotResponsiveView.vue";
import ResponsivePortfolio from "../pages/ResponsivePortfolio.vue";
import NotResponsivePortfolio from "../pages/NotResponsivePortfolio.vue";
import BaseLayout from "../layouts/BaseLayout.vue";
import PortfolioLayout from "../layouts/PortfolioLayout.vue";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      { path: "", component: NotResponsiveView },
      { path: "responsive", component: ResponsiveView },
    ],
  },
  {
    path: "/portfolio",
    component: PortfolioLayout,
    children: [
      { path: "/", component: NotResponsivePortfolio },
      { path: "/responsive", component: ResponsivePortfolio },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

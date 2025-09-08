import { createWebHistory, createRouter } from "vue-router";

import ResponsiveView from "../pages/ResponsiveView.vue";
import NotResponsiveView from "../pages/NotResponsiveView.vue";
import ResponsivePortfolio from "../pages/ResponsivePortfolio.vue";
import NotResponsivePortfolio from "../pages/NotResponsivePortfolio.vue";
import BaseLayout from "../layouts/BaseLayout.vue";
import PortfolioLayout from "../layouts/PortfolioLayout.vue";
import NotFound from "../pages/404.vue";

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
    path: "/",
    component: PortfolioLayout,
    children: [
      { path: "/portfolio", component: NotResponsivePortfolio },
      { path: "/portfolio/responsive", component: ResponsivePortfolio },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

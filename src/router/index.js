import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import SafetyInfoPage from "../pages/SafetyInfoPage.vue";
import VolunteerPage from "../pages/VolunteerPage.vue";
import LinksPage from "../pages/LinksPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import TrainingPage from "../pages/TrainingPage.vue";
import NotFound from "../components/interactive/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/safety",
    name: "safety",
    component: SafetyInfoPage,
  },
  {
    path: "/volunteer",
    name: "volunteer",
    component: VolunteerPage,
  },
  {
    path: "/links",
    name: "links",
    component: LinksPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/training",
    name: "training",
    component: TrainingPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

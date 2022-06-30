import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import SafetyInfoPage from "../pages/SafetyInfoPage.vue";
import VolunteerPage from "../pages/VolunteerPage.vue";
import VolunteerRoles from "../components/subpages/VolunteerRoles.vue";
import VolunteerApplication from "../components/subpages/VolunteerApplication.vue";
import LinksPage from "../pages/LinksPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import CalendarPage from "../pages/CalendarPage.vue";
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
  // At some point, both of these SHOULD be stored as child routes, but for now, this is fine... I guess. :(
  {
    path: "/volunteer/roles",
    name: "roles",
    component: VolunteerRoles,
  },
  {
    path: "/volunteer/join",
    name: "join",
    component: VolunteerApplication,
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
    path: "/calendar",
    name: "calendar",
    component: CalendarPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
const HomePage = () => import("../pages/HomePage.vue");
import AboutPage from "../pages/AboutPage.vue";
const SafetyInfoPage = () => import("../pages/SafetyInfoPage.vue");
const VolunteerPage = () => import("../pages/VolunteerPage.vue");
const VolunteerRoles = () =>
  import("../components/subpages/VolunteerRoles.vue");
const VolunteerApplication = () =>
  import("../components/subpages/VolunteerApplication.vue");
const LinksPage = () => import("../pages/LinksPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");
const CalendarPage = () => import("../pages/CalendarPage.vue");
const NotFound = () => import("../components/interactive/NotFound.vue");
const AdminPage = () => import("../pages/AdminPage.vue");

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
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
// import firebase from "firebase/app";
// import "firebase/auth";

import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import SafetyInfoPage from "../pages/SafetyInfoPage.vue";
import VolunteerPage from "../pages/VolunteerPage.vue";
import LinksPage from "../pages/LinksPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import CalendarPage from "../pages/CalendarPage.vue";
import AdminPage from "../pages/AdminPage.vue";

/* Breaking out subpages into lazy loaded routes. */
const VolunteerRoles = () =>
  import("../components/subpages/VolunteerRoles.vue");
const VolunteerApplication = () =>
  import("../components/subpages/VolunteerApplication.vue");
const SafetyHouseSign = () =>
  import("../components/subpages/SafetyHouseSign.vue");
const NotFound = () => import("../components/interactive/NotFound.vue");
import AdminDashboard from "../pages/AdminDashboard.vue";
import AdminCreateBlog from "../components/subpages/admin/AdminCreateBlog.vue";

const routes = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: {
      title: "About Us",
      requiresAuth: false,
    },
  },
  {
    path: "/safety",
    name: "safety",
    component: SafetyInfoPage,
    meta: {
      title: "Safety Info",
      requiresAuth: false,
    },
  },
  {
    path: "/safety/housesign",
    name: "housesign",
    component: SafetyHouseSign,
    meta: {
      title: "House Sign",
      requiresAuth: false,
    },
  },
  {
    path: "/volunteer",
    name: "volunteer",
    component: VolunteerPage,
    meta: {
      title: "Volunteer",
      requiresAuth: false,
    },
  },
  {
    path: "/volunteer/roles",
    name: "roles",
    component: VolunteerRoles,
    meta: {
      title: "Roles",
      requiresAuth: false,
    },
  },
  {
    path: "/volunteer/join",
    name: "join",
    component: VolunteerApplication,
    meta: {
      title: "Apply",
      requiresAuth: false,
    },
  },
  {
    path: "/links",
    name: "links",
    component: LinksPage,
    meta: {
      title: "Links",
      requiresAuth: false,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: {
      title: "Contact Us",
      requiresAuth: false,
    },
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarPage,
    meta: {
      title: "Calendar",
      requiresAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    meta: {
      title: "Admin",
      requiresAuth: false,
      requiresAdmin: false,
    },
  },
  {
    path: "/dashboard",
    name: "AdminDash",
    component: AdminDashboard,
    meta: {
      title: "Dashboard",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/new-post",
    name: "AdminNewPost",
    component: AdminCreateBlog,
    meta: { title: "AdminNewPost", requiresAuth: true, requiresAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | DVFC`;
  next();
});

// router.beforeEach(async (to, from, next) => {
//   let user = firebase.auth().currentUser;
//   let admin = null;
//   if (user) {
//     let token = await user.getIdTokenResult();
//     admin = token.claims.admin;
//   }
//   if (to.matched.some((res) => res.meta.requiresAuth)) {
//     if (user) {
//       if (to.matched.some((res) => res.meta.requiresAdmin)) {
//         if (admin) {
//           return next();
//         }
//         return next({ name: "Home" });
//       }
//       return next();
//     }
//     return next({ name: "Home" });
//   }
//   return next();
// });

export default router;

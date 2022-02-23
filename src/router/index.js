import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SafetyInfoView from '../views/SafetyInfoView.vue';
import VolunteerView from '../views/VolunteerView.vue';
import LinksView from '../views/LinksView.vue';
import ContactView from '../views/ContactView.vue';
import TrainingView from '../views/TrainingView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/safety',
    name: 'safety',
    component: SafetyInfoView
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: VolunteerView
  },
  {
    path: '/links',
    name: 'links',
    component: LinksView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/training',
    name: 'training',
    component: TrainingView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

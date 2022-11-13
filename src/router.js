import { createRouter, createWebHistory } from 'vue-router';
import CoordinateForm from './components/pages/CoordinateForm.vue';
import GeoDistance from './components/pages/GeoDistance.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coordinates' },
    { path: '/coordinates', component: CoordinateForm },
    { path: '/distance/:coords', component: GeoDistance, props: true },
  ],
});

export default router;
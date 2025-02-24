import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('@/pages/LandingPage.vue') },
    { path: '/family-tree', component: () => import('@/pages/FamilyTree.vue') },
    { path: '/events', component: () => import('@/pages/Events.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

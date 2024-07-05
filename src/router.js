import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('./pages/MainPage.vue')
    },
    {
        path: '/favorites',
        name: 'FavoritesPage',
        component: () => import('./pages/FavoritesPage.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
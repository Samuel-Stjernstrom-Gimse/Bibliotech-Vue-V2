import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AllBooksPage from "./pages/AllBooksPage.vue";
import Login from "./pages/Login.vue";


const routes: RouteRecordRaw[] = [
    { path: '/', component: Login },
    { path: '/Login', component: Login },
    { path: '/books', component: AllBooksPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
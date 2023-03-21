import Main from "./pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "./pages/PostPage.vue";
import OnePostPage from "./pages/OnePostPage.vue";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/posts/:id',
        component: OnePostPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
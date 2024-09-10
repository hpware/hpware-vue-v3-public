import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('@/Pages/**/*.vue');

const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\/Pages\/(.*)\.vue$/)[1];
    return {

        path: name === 'Index' ? '/' : `/${name.toLowerCase()}`,
        name,
        component: pages[path],
    };
});

routes.push({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/Pages/OopsError.vue'),
    meta: {
        title: 'Oops! Page not found',
    },
});

const router = createRouter({
    history: createWebHistory(),
    routes,
    {path: '/**/Index', Redirect: "/**/"}
});

export default router;

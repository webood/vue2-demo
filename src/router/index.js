import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
                meta: { title: '首页', icon: 'home', keepAlive: false },
            },
            {
                path: '/test',
                name: 'test',
                component: () => import(/* webpackChunkName: "home" */ '../views/test/index.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

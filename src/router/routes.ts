import { RouteRecordRaw } from 'vue-router'

export const mainRoutes: RouteRecordRaw[] = [
    {
        path: '/user',
        name: 'test1',
        component: () => import('@/views/home/User.vue')
    },
    {
        path: '/order',
        name: 'test2',
        component: () => import('@/views/home/Order.vue')
    }
]

export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        redirect: mainRoutes[0].path,
        component: () => import('@/views/main/Main.vue'),
        children: [...mainRoutes]
    }
]

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/not-found/NotFound.vue')
    }
]

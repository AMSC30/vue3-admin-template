import { RouteRecordRaw } from 'vue-router'

export const menuRoutes: RouteRecordRaw[] = [
    {
        path: '/test-1',
        name: 'test1',
        component: () => import('@/views/test/Test1.vue')
    },
    {
        path: '/test-2',
        name: 'test2',
        component: () => import('@/views/test/Test2.vue')
    }
]

export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/layout/BasicLayout.vue'),
        children: [...menuRoutes]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/not-found/NotFound.vue')
    }
]

export const constantRoutes: RouteRecordRaw[] = []

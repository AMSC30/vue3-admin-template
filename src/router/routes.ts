import { RouteRecordRaw } from 'vue-router'

export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/layout/BasicLayout.vue'),
        children: []
    }
]
export const constantRoutes: RouteRecordRaw[] = []

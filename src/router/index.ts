import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { asyncRoutes, constantRoutes } from './routes'

const routes: RouteRecordRaw[] = [...asyncRoutes, ...constantRoutes]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

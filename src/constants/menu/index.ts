import { IMenuItem } from './types'

const menu: IMenuItem[] = [
    {
        key: '/home',
        label: '首页',
        children: [
            { key: '/user', label: '用户' },
            { key: '/order', label: '订单' }
        ]
    }
]
export default menu

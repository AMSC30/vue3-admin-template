import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useNotification } from 'naive-ui'

import config from './config'

axios.defaults.timeout = config.timeout
axios.defaults.baseURL = config.baseURL

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        config.headers!['language'] = 'zh'
        config.headers!['Cache-control'] = 'no-cache'
        config.headers!['Expires'] = '-1'
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res: AxiosResponse) => {
        return res.data
    },
    (error: AxiosError) => {
        const notification = useNotification()
        if (error.code === 'ECONNABORTED') {
            notification.error({
                title: '操作失败',
                content: '接口响应超时'
            })
        }
        return Promise.reject(error)
    }
)

export default axios

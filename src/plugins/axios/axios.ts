import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

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
        window.$notice('error', {
            title: '操作失败',
            content: error.message
        })
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.data.code === config.notLoginCode) {
            window.$notice('error', {
                title: '操作失败',
                content: '登录信息失效，请重新登录'
            })
            return Promise.reject(new Error('登录信息失效'))
        }
        if (res.data.code !== config.successCode) {
            window.$notice('error', {
                title: '操作失败',
                content: res.data.message
            })
            return Promise.reject(new Error(res.data.message))
        }
        return res.data
    },
    (error: AxiosError) => {
        const isTimeout: boolean = error.code === 'ECONNABORTED' && error.message.includes('timeout')

        const timeoutMessage = '接口响应超时'
        const commonMessage = `接口${error.config.url}调用失败`

        window.$notice.error({
            title: '操作失败',
            content: isTimeout ? timeoutMessage : commonMessage
        })
        return Promise.reject(error)
    }
)

export default axios

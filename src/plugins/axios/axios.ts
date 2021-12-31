import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import config from './config'

axios.defaults.timeout = config.timeout
axios.defaults.baseURL = config.baseURL

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
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
        return Promise.reject(error)
    }
)

export default axios

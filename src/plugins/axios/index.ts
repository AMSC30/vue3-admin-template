import { AxiosRequestConfig } from 'axios'
import { axiosConfigKeyType } from './types'
import axios from './axios'

function getService(url: string): Promise<any>
function getService(url: string, data: any): Promise<any>
function getService(url: string, data: any, config: AxiosRequestConfig): Promise<any>

function getService(url: string, data?: any, config?: AxiosRequestConfig) {
    const newConfig: AxiosRequestConfig = {}

    if (data) {
        newConfig.params = data
        if (config) {
            for (const key in config) {
                newConfig[key as axiosConfigKeyType] = config[key as axiosConfigKeyType]
            }
        }
    }

    return axios.get(url, newConfig)
}

export const postService = () => {
    console.log(1212)
}

export const postFormService = () => {
    console.log(1212)
}
export { getService }
export default {
    getService,
    postService,
    postFormService
}

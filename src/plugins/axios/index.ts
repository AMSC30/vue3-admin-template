import { AxiosRequestConfig } from 'axios'
import axios from './axios'
import { ContentTypeEnum, PostDataType } from './types'
import { jsonToString } from './util'

export const getService = (url: string, config?: AxiosRequestConfig) => {
    return axios.get(url, config)
}

export const postService = (url: string, data: PostDataType, config?: AxiosRequestConfig) => {
    return axios.post(url, data, config)
}

export const postFormService = (url: string, data: PostDataType, config: AxiosRequestConfig) => {
    return axios.post(url, jsonToString(data), {
        ...config,
        headers: {
            'Content-Type': ContentTypeEnum.FORM_URLENCODED
        }
    })
}
export const postFormDataService = (url: string, data: PostDataType, config?: AxiosRequestConfig) => {
    const fd: FormData = new window.FormData()

    Object.keys(data).forEach((key: string) => {
        const value = data[key]
        if (Array.isArray(value)) {
            value.forEach((item) => {
                fd.append(key, item)
            })
            return
        } else {
            fd.append(key, data[key])
        }
    })

    return axios.post(url, fd, config)
}
export default {
    getService,
    postService,
    postFormService,
    postFormDataService
}

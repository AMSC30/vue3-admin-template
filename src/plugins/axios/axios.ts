import axios from 'axios'
import config from './config'

axios.defaults.timeout = config.timeout
axios.defaults.baseURL = config.baseURL

axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        return res.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axios

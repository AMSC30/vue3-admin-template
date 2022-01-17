import Qs from 'qs'
import { PostDataType } from './types'

export const jsonToString = (data: PostDataType) => {
    return Qs.stringify(data)
}
export const jsonToQueryString = (data: PostDataType) => {
    return Qs.stringify(data, { addQueryPrefix: true })
}

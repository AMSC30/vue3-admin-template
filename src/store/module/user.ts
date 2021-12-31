import { userStateType } from '../types'

export default {
    state: {
        userInfo: null
    },
    mutations: {
        SET_USER(state: userStateType, payload: any) {
            state.userInfo = payload
        }
    },
    actions: {}
}

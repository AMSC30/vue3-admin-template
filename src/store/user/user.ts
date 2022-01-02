import { IUserStateType } from './types'

export default {
    state: {
        userInfo: null
    },
    mutations: {
        SET_USER(state: IUserStateType, payload: any) {
            state.userInfo = payload
        }
    },
    actions: {}
}

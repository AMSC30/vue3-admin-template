import { IUserStateType } from './types'

export default {
    namespace: true,
    state: {
        userInfo: null
    },
    mutations: {
        SET_USER(state: IUserStateType, payload: any) {
            state.userInfo = payload
        }
    },
    actions: {
        goToLogin() {
            return new Promise((resolve, reject) => {
                resolve(1)
                reject()
            })
        }
    }
}

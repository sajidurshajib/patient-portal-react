import { PatGetStorage, PatSetStorage, PatDefStorage } from '../utils/PatLocalStorage'

export const authState = PatDefStorage('auth', { auth: false, token: '' })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            PatSetStorage('auth', { auth: true, token: state.token })
            return JSON.parse(PatGetStorage('auth'))
        case 'token':
            PatSetStorage('auth', { auth: true, token: action.payload })
            return JSON.parse(PatGetStorage('auth'))
        case 'remove':
            PatSetStorage('auth', { auth: false, token: '' })
            return JSON.parse(PatGetStorage('auth'))
        default:
            return state
    }
}

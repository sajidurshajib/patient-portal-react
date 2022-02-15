import { PatDefStorage, PatSetStorage, PatGetStorage } from '../utils/PatLocalStorage'

export const userState = PatDefStorage('user', { info: {} })

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            PatSetStorage('user', { info: state.info })
            return JSON.parse(PatGetStorage('user'))
        case 'set':
            PatSetStorage('user', { info: action.payload })
            return JSON.parse(PatGetStorage('user'))
        case 'remove':
            PatSetStorage('user', { info: {} })
            return JSON.parse(PatGetStorage('user'))
        default:
            return state
    }
}

import { LOGIN_USER,DUPCHECK_USER,REGISTER_USER } from '../_action/types'

export default function(state = {},action){
    switch(action.type){
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload}
        case DUPCHECK_USER:
            return { ...state, serviceCode : action.payload.serviceCode }
        case REGISTER_USER:
            return { ...state, serviceCode : action.payload.serviceCode }
        default:
            return state
    }
}
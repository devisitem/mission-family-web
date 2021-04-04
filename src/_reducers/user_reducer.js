import { LOGIN_USER,DUPCHECK_USER } from '../_action/types'

export default function(state = {},action){
    switch(action.type){
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload}
            break
        case DUPCHECK_USER:
            return { ...state, serviceCode : action.payload.serviceCode }
            break
        default:
            return state
    }
}
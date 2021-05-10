import { CREATE_MISSION } from '../_action/types'

export default function(state = {},action){

    switch(action.type){

        case CREATE_MISSION:
            return { ...state, createSuccess : action.payload}
            
        default:
            return state
    }

}
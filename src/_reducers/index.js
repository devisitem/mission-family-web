import { combineReducers } from 'redux'
import user from './user_reducer.js'
import mission from './mission_reducer.js'
const rootReducer = combineReducers({
    user,mission
})

export default rootReducer
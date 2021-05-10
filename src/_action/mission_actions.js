import axios from 'axios'
import { CREATE_MISSION } from './types'

const api = axios.create({
    baseURL: 'http://localhost:8364/api/missions',
    headers: { "Content-Type": "application/json" }
})

export function createMission(data){
    const request = api.post('/create',data,{ timeout: 1000})
        .then(response =>
            response.data
        )
    return{
        type: CREATE_MISSION,
        payload: request
    }
}


import axios from 'axios'
import { LOGIN_USER, DUPCHECK_USER } from './types'

const api = axios.create({
    baseURL: 'http://localhost:8364/api/users',
    headers: { "Content-Type": "application/json" }
})

export function dupCheckUser(data){
    const request = api.post('/dupCheck',data)
        .then(response =>
            response.data
        )
    return{
        type: DUPCHECK_USER,
        payload: request
    }
}

export function loginUser(data){
    const request = api.post('/login',data)
        .then(response => 
            response.data
        )
    return {
        type: LOGIN_USER,
        payload: request
    }
}
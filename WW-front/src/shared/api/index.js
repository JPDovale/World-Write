import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export async function loginRequest(email, password){
    return api.post('/user/login', {email, password})
}

export async function registerRequest(name, email, password){
    return api.post('/user/register', {name, email, password})
}
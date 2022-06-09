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

export async function addStudyPlaner(subjectPack, _id){
    return api.post(`/new/study-planer/${_id}`, {...subjectPack})
}

export async function getStudyPlaner(_id){
    return api.get(`/all/study-planer/${_id}`)
}

export async function deleteStudyPlaner(_id){
    return api.delete(`/delete/study-planer/${_id}`)
}

export async function updateMatterStudyPlaner(_id, updatedSubjectPack){
    return api.put(`/update/study-planer/${_id}`, {...updatedSubjectPack})
}

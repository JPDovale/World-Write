import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { api, loginRequest, registerRequest } from "../../api";


export const AuthContext = createContext()

export function AuthProvider({children}){
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const recoveredUser = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if(recoveredUser && token){
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.authorization = `Bearer ${token}`
        }

        setLoading(false)
    },[])

    async function register (name, email, password){
        const res = await registerRequest(name, email, password)

        const registeredUser = res.data

        if(!registeredUser) {
            return alert('não foi possível criar o seu usuário')
        }else{
            console.log(registeredUser)
            navigate('/login')
        }
    }

    async function login (email, password){
        const res = await loginRequest(email, password)
        const token = res.data.authorization
        const loggedUser = {
            id: res.data.user._id,
            email: res.data.user.email,
            ADM: res.data.user.ADM,
            todo: res.data.user.todo,
            projects: res.data.user.projects,
            name: res.data.user.name
        }

        if(!loggedUser) return alert('houve um erro')

        localStorage.setItem('user', JSON.stringify(loggedUser))
        localStorage.setItem('token', token)

        api.defaults.headers.authorization = `Bearer ${token}`

        setUser(loggedUser)
        navigate('/')
    }

    function logout(){

        setUser(null)
        
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        api.defaults.headers.authorization = null

        navigate('/login')
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 
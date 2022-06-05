import './register.css'
import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {AuthContext} from "../../../shared/services/authContext"
import { api } from '../../../shared/api'

export default function Register(){
    const navigate = useNavigate()
    const {register} = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
        const recoveredUser = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if(recoveredUser && token){
            api.defaults.headers.authorization = `Bearer ${token}`
            navigate('/')
        }

        if(recoveredUser && !token){
            navigate('/login')
        }
        

        setLoading(false)
    },[])

    function handleRegister(e){
        e.preventDefault()

        if(!name ||!email || !password || !confirmPassword){
            return alert("Preencha todos os campos de registro")
        }

        if(password != confirmPassword){
            alert('as senhas não conferem')
        }else{
            register(name, email, password)
        }
    }

    if(loading){
        return (
            <div className="loading">
                carregando...
            </div>
        )
    }

    return (
    <>
        <div className='content'>
            <form 
                className='form'
                onSubmit={handleRegister}
            >
                <img src='../assets/logo.png' alt='logo'/>
                <label>Registro</label>

                <div className='content-input'>
                    <label> Nome </label>
                    <input 
                        type="text"
                        className='input'
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                    />
                </div>
                <div className='content-input'>
                    <label> Email </label>
                    <input 
                        type="email"
                        className='input'
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                    />
                </div>
                <div className='content-input'>
                    <label> Senha </label>
                    <input 
                        type="password"
                        className='input'
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password}
                    />
                </div>
                <div className='content-input'>
                    <label> Confirme sua senha </label>
                    <input 
                        type="password"
                        className='input'
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        value={confirmPassword}
                    />
                </div>
                <div className='content-buttons'>
                    <button className='content-submit'>
                        <input 
                            type="submit" 
                            className='submit'   
                        />
                    </button>
                    <Link to='/login'>
                        <button className='content-submit login'>
                            Já tenho cadastro
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </>
    )
}
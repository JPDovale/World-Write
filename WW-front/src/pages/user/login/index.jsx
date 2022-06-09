import './login.css'
import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {AuthContext} from "../../../shared/services/authContext"

export default function Login(){
    const navigate = useNavigate()
    const {authenticated, login} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
   
    setTimeout(() => {
        RED()
    }, 500);
    
    async function RED(){
        if(authenticated){
            navigate('/')
            setLoading(false)
        }else{
            setLoading(false)
        }
    }

    function handleLogin(e){
        e.preventDefault()

        if(!email || !password){
            alert("Preencha os campos de login")
        }else{
            login(email, password)
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
                onSubmit={handleLogin}
            >
                <img src='../assets/logo2.png' alt='logo'/>
                <label>Login</label>

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
                <div className='content-buttons'>
                    <button 
                        className='content-submit'
                        onClick={handleLogin}
                    >
                        <input 
                            type="submit" 
                            className='submit'
                            onClick={handleLogin}   
                        />
                    </button>
                    <Link to='/register'>
                        <button className='content-submit register'>
                            Ainda não tenho cadastro
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </>
    )
}
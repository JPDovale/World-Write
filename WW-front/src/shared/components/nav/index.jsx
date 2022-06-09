import './nav.css'
import {Link} from 'react-router-dom'
import { useContext, useState } from 'react'

import {AuthContext} from '../../services/authContext'

export default function Nav(props){
    const {logout} = useContext(AuthContext)

    const [isActive, setIsActive] = useState(false)

    function handleLogout(){
        logout()
    }
    
    return(
        <div className='nav-bar'>
            <div className='nav-buttons'>
                <div className='nav-buttons-logo-menu'>
                    <button 
                        className='menu'
                        onClick={()=>setIsActive(!isActive)}
                    >
                        <img
                            src='../assets/menu.png'
                            className='icon-img'
                            alt='menu'
                        />
                    </button>
                    <div className='logo'>
                        <Link to={'/'}>
                            <img 
                                src='../assets/logo2.png'
                                className='icon-img'
                                alt='logo'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <nav className={`navigation ${isActive ? 'active' : 'inactive'}`}>
                <ul className='nav-items'>
                    <h4 className='title'>Navegação</h4>
                    <li>
                        <Link className='item' to={'/'}><label>Home</label></Link>
                    </li>
                    <li>
                        <Link  className='item' to={'/estudo'}><label>Estudo</label></Link>
                    </li>
                    <hr />
                    <h4 className='title'>Usuário</h4>
                    <li>
                        <Link className='item' to={'/login'} onClick={()=>{handleLogout()}}><label>Sair</label></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
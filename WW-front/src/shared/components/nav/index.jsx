import './nav.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Nav(props){
    const [isActive, setIsActive] = useState(false)
    
    return(
        <div className='nav-bar'>
            <div className='nav-buttons'>
                <div className='logo'>
                    <Link to={'/'}>
                        <img 
                            src='../assets/worldPng.png'
                            className='icon-img'
                            alt='logo'
                        />
                    </Link>
                </div>
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
                </ul>
            </nav>
        </div>
    )
}
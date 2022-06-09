import './footer.css'
import React from 'react'

import {Link} from 'react-router-dom'

export default function Footer(props){
    return(
        <footer className='container-footer'>
            
            <div className='social-midias'>
                <div className='title'>
                    <p>Conecte-se conosco</p>
                </div>
                <div className='social-midias-logos'>
                    <div className='logo'>
                        <a href="https://www.instagram.com/j.paulo_dovale/">
                            <img src='../assets/socialMidias/instagram.png' alt='instagram'></img>
                        </a>
                    </div>
                    <div className='logo'>
                        <a href="https://www.facebook.com/profile.php?id=100013147845878">
                            <img src='../assets/socialMidias/facebook.png' alt='facebook'></img>
                        </a>
                    </div>
                    <div className='logo'>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-do-vale-o-4b5209232/">
                            <img src='../assets/socialMidias/linkedin.png' alt='linkedin'></img>
                        </a>
                    </div>
                    <div className='logo'>
                        <a href="https://wa.me/5541988893290?text=Ol%C3%A1!%20Vim%20pelo%20site%20World%20Write!">
                            <img src='../assets/socialMidias/whatsapp.png' alt='whatsapp'></img>
                        </a>
                    </div>
                    <div className='logo'>
                        <a href="https://www.youtube.com/channel/UCjHGBWLEHxbW4lhdYmEgwHQ">
                            <img src='../assets/socialMidias/youtube.png' alt='youtube'></img>
                        </a>
                    </div>
                    <div className='logo'>
                        <a href="https://twitter.com/J_Paulo_dovale">
                            <img src='../assets/socialMidias/twitter.png' alt='twitter'></img>
                        </a>
                    </div>
                    <div className='logo'>
                        <Link to={''}>
                            <img src='../assets/socialMidias/help.png' alt='help'></img>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
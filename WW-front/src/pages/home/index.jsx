import './home.css'

import {Link} from 'react-router-dom'

export default function HomePage(){
    return(
        <section className='container'>
            <div className='welcome'>
                <div className='title-section'>
                    <div className='titles'>
                        <h3 className='sub-title'>bem-vindo(a) ao</h3>
                        <h1 className='title'>World Write</h1>
                        <p>onde seus sonhos se tornam muito mais que realidade</p>
                    </div>
                    <div className='img'>
                        <img 
                            src='../assets/logo2.png' 
                            alt='logo' 
                            className='logo'
                        />
                    </div>
                </div>
                <div className='button-section'>
                    <div className='button'>
                        <label>Novo projeto</label>
                        <button>
                            <Link to={''}>
                                <img 
                                    className='button-img'
                                    src="../assets/add.png" 
                                    alt="add" 
                                />
                            </Link>
                        </button>
                    </div>
                    <div className='button'>
                        <label>Planilha de estudos</label>
                        <button>
                            <Link to={'/estudo'}>
                                <img 
                                    className='button-img'
                                    src="../assets/planer.png" 
                                    alt="planer" 
                                />
                            </Link>
                        </button>
                    </div>
                    <div className='button'>
                        <label>Meus projetos</label>
                        <button>
                            <Link to={''}>
                                <img 
                                    className='button-img'
                                    src="../assets/projects.png" 
                                    alt="projects" 
                                />
                            </Link>
                        </button>
                    </div>
                    <div className='button'>
                        <label>aprender</label>
                        <button>
                            <Link to={''}>
                                <img 
                                    className='button-img'
                                    src="../assets/lesson.png" 
                                    alt="lesson" 
                                />
                            </Link>
                        </button>
                    </div>
                    <div className='button'>
                        <label>Em alta</label>
                        <button>
                            <Link to={''}>
                                <img 
                                    className='button-img'
                                    src="../assets/writing.png" 
                                    alt="writing" 
                                />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
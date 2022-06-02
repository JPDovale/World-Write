import './init.css'
import { Link } from 'react-router-dom'

export default function Init(){

    return(
        <>
            <div className="app">
                <Link to='/home'>
                    <h1 className="title"> Base app</h1>
                </Link>
            </div>
        </>
    )
}
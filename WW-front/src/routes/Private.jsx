import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'

import {AuthContext} from '../shared/services/authContext'

export default function Private({children}){
    const {authenticated, loading} = useContext(AuthContext)

    if(loading){
        return(
            <div className='loading'>loading...</div>
        )
    }

    if(!authenticated){
        return <Navigate to='/login'/>
    }else{
        return children
    }
}
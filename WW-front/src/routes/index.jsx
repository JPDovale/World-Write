import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Private from './Private'

import Login from '../pages/user/login'
import Register from '../pages/user/register'

import HomePage from '../pages/home'
import Init from '../pages/init'
import Study from '../pages/study'
import Nav from '../shared/components/nav'

import { AuthProvider } from '../shared/services/authContext'

export default function AppRoutes(){
    
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact path='/login'
                        element={<Login/>}
                    />
                    <Route
                        exact path='/register'
                        element={<Register/>}
                    />
                    <Route 
                        exact path='/home'
                        element={
                            <Private>
                                <Nav/>
                                <HomePage/>
                            </Private>
                            }
                    />
                    <Route 
                        exact path='/'
                        element={
                            <Private>
                                <Nav/>
                                <Init/>
                            </Private>
                            }
                    />
                    <Route 
                        exact path='/estudo'
                        element={
                            <>
                                <Nav/>
                                <Study/>
                            </>
                        }    
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}
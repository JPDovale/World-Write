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
import Study from '../pages/study'
import Nav from '../shared/components/nav'
import Footer from '../shared/components/footer'

import { AuthProvider } from '../shared/services/authContext'
import { StudyPlanerProvider } from '../shared/services/studyPlanerContext'

export default function AppRoutes(){
    
    return(
        <Router>
            <AuthProvider>
                <StudyPlanerProvider>
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
                            exact path='/'
                            element={
                                <Private>
                                    <Nav/>
                                    <HomePage/>
                                    <Footer/>
                                </Private>
                                }
                        />
                            <Route 
                                exact path='/estudo'
                                element={
                                    <>
                                        <Nav/>
                                        <Study/>
                                        {/* <Footer/> */}
                                    </>
                                }    
                            />
                    </Routes>
                </StudyPlanerProvider>
            </AuthProvider>
        </Router>
    )
}
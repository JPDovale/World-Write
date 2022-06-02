import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from '../pages/home'
import Init from '../pages/init'

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route 
                    exact path='/home'
                    element={<HomePage/>}
                />
                <Route 
                    exact path='/'
                    element={<Init/>}
                />
            </Routes>
        </Router>
    )
}
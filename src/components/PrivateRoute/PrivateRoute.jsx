import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

export const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useUser();
    return (
        <>
        <Route {...rest} render={( privateRouteProps ) => 
            user ? children : <Redirect to={{pathname:'/login', 
            state: { from: privateRouteProps.location } }} /> } />
        </>
    )
}

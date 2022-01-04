import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMyHook } from '../../context/UserContext'

export const Auth = () => {
    const { user, setUser } = useMyHook()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/'} }

     return (
        <div>
            <button onClick={() => setUser('bob')}>Log in as Bob</button>
            Current User: {user}
            <h3>Login Page</h3>
            <p>Redirect Path: {from.pathname}</p>
            <Link to="/">View Guestbook</Link>
        </div>
    )
}

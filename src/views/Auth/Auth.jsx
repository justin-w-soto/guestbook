import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useMyHook } from '../../context/UserContext'

export const Auth = () => {
    const { user, setUser } = useMyHook()
    const location = useLocation()
    const history = useHistory()
    const { from } = location.state || { from: { pathname: '/'} }

     return (
        <div style={{
            fontSize: '2rem', 
            fontFamily:'sans-serif' 
            }}>
            <h3>Welcome to the Login Page</h3>
            Current User: {user} 
          
            <button onClick={() => setUser('bob')} style={{ 
                background: '#DB7F8E', 
                color: 'white', 
                padding: '1rem', 
                fontSize:'1.5rem', 
                margin:'1rem',
                boxShadow: 'none',
                border: 'none'
                }}>
                    Log in as Bob</button>
            <p>Redirect Path: {from.pathname}</p>
            <Link to="/" style={{ textDecoration: 'none', }}>View Guestbook</Link>
        </div>
    )
}

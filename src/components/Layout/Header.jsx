import React from 'react'
import { useMyHook } from '../../context/UserContext'

export const Header = () => {
    const { user } = useMyHook()
    return (
        <header className='header'
        style={{ 
          background: '#091620', 
          color: 'white', 
          padding: '1rem', 
          fontFamily:'sans-serif',
         
          }}>
            {user ? (
        <p>
          Signing Guestbook as {user}
        </p>
      ) : (
        <p style={{ fontSize: '4rem'}}>Sign In Friend!</p>
      )}
        </header>
    )
}

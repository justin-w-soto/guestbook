import React from 'react'

import { useUser } from '../../context/UserContext'

export const Header = () => {
    const { user } = useUser()
    return (
        <header className='header'
        style={{ 
          background: 'navy', 
          color: 'white', 
          padding: '1rem', 
          fontFamily:'sans-serif',
         
          }}>
            {user ? (
        <p>
          Signing Guestbook as {user}
        </p>
      ) : (
        <p style={{ fontSize: '2rem'}}>Sign In Friend!</p>
      )}
        </header>
    )
}

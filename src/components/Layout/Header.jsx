import React from 'react'
import { useMyHook } from '../../context/UserContext'

export const Header = () => {
    const { user } = useMyHook()
    return (
        <header style={{color: 'white', background: 'tomato', marginTop: '0', display:'flex', justifyContent: 'space-between' , paddingInline: '4rem'  } } className='header'>
            {user ? (
        <p>
          Signing Guestbook as {user}
        </p>
      ) : (
        <p>Sign In Friend!</p>
      )}
        </header>
    )
}

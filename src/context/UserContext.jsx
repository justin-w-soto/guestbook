import React from 'react'
import { useContext, createContext, useState }from 'react'

    const UserContext = createContext()

    const UserProvider = ({ children }) => {
        const [user, setUser] = useState('')
        return (
        <UserContext.Provider 
        value={{user, setUser}}
        >
            { children }
        </UserContext.Provider>)
    }

    // MAKE A CUSTOM HOOK 
    const useMyHook = () => {
        const context = useContext(UserContext)
        
        // if (context === undefined) {
        //     throw new Error('useMyHook needs to be called inside of a UserContext Provider')
        // }
        return context
    }

   
export { UserProvider, useMyHook }

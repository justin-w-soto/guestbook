import { useContext, createContext, useState }from 'react'

export const UserContext = () => {

    const UserContext = createContext()
    const UserProvider = () => {
        const [something, setSomething] = useState('')
        return <UserContext.Provider value='somestate'></UserContext.Provider>
    }
}

// MAKE A CUSTOM HOOK 
    const useMyHook = () => {
        const context = useContext(userContext)
        
        if (context === undefined) {
            throw new error('useMyHook needs to be called inside of a UserContext Provider')
        }
        return context
    }

   

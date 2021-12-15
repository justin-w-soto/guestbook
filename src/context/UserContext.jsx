import { useContext, createContext, useState }from 'react'

export const UserContext = () => {

    const UserContext = createContext()
    const UserProvider = () => {
        const [something, setSomething] = useState('')
        return <UserContext.Provider value='somestate'></UserContext.Provider>
    }
}

    return (
        <div>
            
        </div>
    )


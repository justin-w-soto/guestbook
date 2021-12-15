import React from 'react'
import { useContext, createContext, useState } from 'react'

const EntryContext = createContext()

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([])
  return <EntryContext.Provider value={{ entries, setEntries }}>{children}</EntryContext.Provider>
}

// MAKE ANOTHER CUSTOM HOOK
const useEntriesCustom = () => {
  const context = useContext(EntryContext) 

  if (context === undefined) {
    throw new Error('useEntriesCustom must be inside of EntryContext Provider')
  }
  return context
}

export { EntryProvider, useEntriesCustom }
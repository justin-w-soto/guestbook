import React from 'react'
import { useState } from 'react'
import { useEntries } from '../../context/EntryContext'
import { useMyHook } from '../../context/UserContext'

export const GuestBook = () => {
const [name, setName] = useState('')
const [guestEntry, setGuestEntry] = useState('')
const { entries, setEntries } = useEntries()
const { user, setUser } = useMyHook()


const handleSubmit = (e) => {
    e.preventDefault()
    updateName()
  }

const updateName = () => {
  if (!guestEntry) return 
  setUser(name), setEntries([...entries, {  name, message: guestEntry }]), setGuestEntry('')
}  

const guestNameInput = (
  
      <>
        <label htmlFor="guestName">Guest Name</label>
    
        <input
            className="input"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      
    </>
  )

const msg = user ? `Thanks for the note ${user}.` : 'Please Sign the Book!'

    return (

      <>
      <h1>{msg}</h1>
      <form onSubmit={handleSubmit}>

      {user ? null : guestNameInput}
        <label htmlFor='guestEntry'>Guest Entry</label>
        <textarea id="guestEntry" value={guestEntry} placeholder="Your Note!" onChange={(e) => setGuestEntry(e.target.value)} />
        <button className="button" type="submit">
          Sign
        </button>
        {user && (
        <button 
          type="button" 
          onClick={() => { setUser(''), setName('') }}
          >Not {user} ?
        </button>
          )}

      </form>
      </>
    )
}
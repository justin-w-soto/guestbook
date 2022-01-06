import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEntries } from '../../context/EntryContext'
import { useUser } from '../../context/UserContext'

export const GuestBook = () => {
const [name, setName] = useState('')
const [guestEntry, setGuestEntry] = useState('')
const { entries, setEntries } = useEntries()
const { user } = useUser('user')
const history = useHistory()

const handleSubmit = (e) => {
    e.preventDefault()
    updateName()
  }

const updateName = () => {
  if (!guestEntry) return 
   setEntries([...entries, {  name, message: guestEntry }]), setGuestEntry('')
}  

const redirectLogin = () => {
  let path = '/login';
  history.replace(path);

}

const msg = user ? `Thanks for the note ${user}.` : 'Sign the Book!'

    return (

      <>
        <h1>{msg}</h1>
        <form onSubmit={handleSubmit}>
          {user ? null : guestEntry}
            <label htmlFor='guestEntry'>Guest Entry</label>

            <textarea 
            id="guestEntry" 
            value={guestEntry} 
            placeholder="Your Note!" 
            onChange={(e) => setGuestEntry(e.target.value)} 
            />

            <button className="button" type="submit">Sign</button>
            {user && (
            <button 
              type="button" 
              onClick={redirectLogin}
              >Not {user} ?
            </button>
              )}
          </form>
        </>
    )
}
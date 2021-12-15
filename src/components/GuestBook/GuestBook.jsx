import React from 'react'
import { useState } from 'react'

export const GuestBook = () => {
const [name, setName] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    updateGuestName()
  }

const guestNameInput = (
      <>
        <label>Guest Name</label>
    
        <input
            className="input"
            type="text"
            placeholder="Guest Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      
    </>
  )
    return (
        <form>
            <label htmlFor='guestEntry'>Guest Entry</label>
            <textarea  placeholder="Your Entry!"/>
            <button className="button" type="submit">
            Sign 
          </button>
        </form>
    )
}

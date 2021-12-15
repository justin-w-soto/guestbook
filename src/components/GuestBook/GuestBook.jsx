import React from 'react'

export const GuestBook = () => {
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

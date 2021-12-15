import React from 'react'

export const Entry = ({ entry: { name, message } }) => {
    return (
        <div>
            <h3>{name}</h3>
            <section>{message}</section>
        </div>
    )
}

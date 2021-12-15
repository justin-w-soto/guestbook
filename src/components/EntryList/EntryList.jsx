import React from 'react'
import { useEntriesCustom } from '../../context/EntryContext'
import { Entry } from '../Entry/Entry'

export const EntryList = () => {
const { entries } = useEntriesCustom()

    return (
        <div>
            <ul>
                {entries.map((guestentry) => {
                    return (
                    <li key={`${guestentry.name}-${guestentry.message}`}> 
                        <Entry guestentry={guestentry}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

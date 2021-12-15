import React from 'react'

export const Header = () => {
    return (
        <span style={{color: 'white', background: 'tomato', marginTop: '0', display:'flex', justifyContent: 'space-between' , paddingInline: '4rem'  } } className='header'>
            <h2 >Logo</h2>
            <h2> sign in friend </h2>
        </span>
    )
}

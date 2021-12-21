import React from "react";
import { render } from '@testing-library/react';
import { GuestBook } from './GuestBook'
import { UserProvider } from '../../context/UserContext'
import { EntryProvider } from '../../context/EntryContext'

it('should render the guestbook view', ()=>{
    const { container } = render(
    <UserProvider>
        <EntryProvider>
            < GuestBook />
        </EntryProvider>
    </UserProvider>
    );

    expect(container).toMatchSnapshot();
});

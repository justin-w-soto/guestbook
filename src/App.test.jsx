import React from "react";
import {render, screen } from '@testing-library/react';
import App from './App' ;

it('should render input form', () => {
    render(<App />)
    const form = screen.getByText(/Guest Name/i);
    expect(form).toBeInTheDocument();

});
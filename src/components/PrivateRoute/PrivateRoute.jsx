import { Route } from 'react-router-dom'

export const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest}>
           <h1>This is private time shhhhh!</h1> {children}
        </Route>
    )
}

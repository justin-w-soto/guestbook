import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useMyHook } from '../../context/UserContext'

export const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useMyHook();
    return (

        <>
        <h1>This is private time shhhhh!</h1> 
        <Route {...rest} render={( privateRouteProps ) => 
            user ? children : <Redirect to={{pathname:'/login', 
            state: { from: privateRouteProps.location } }} /> } />
        </>
    )
}

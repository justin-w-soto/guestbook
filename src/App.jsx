import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { Auth } from './views/Auth/Auth'
import { Home } from './views/Home/Home'
import { Layout } from './views/Layout/Layout'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
 

export default function App() {
  return (
      <UserProvider>
        <Router>
            <Layout>
              <Switch>
                <Route path="/login">
                  <Auth />
                </Route>
                <PrivateRoute path="/">
                  <Home />  
                </PrivateRoute>
              </Switch>
            </Layout>
        </Router>
      </UserProvider>
  )

}

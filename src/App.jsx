import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { Auth } from './views/Auth/Auth'
import { Home } from './views/Home/Home'
import { Layout } from './views/Layout/Layout'
 

export default function App() {
  return (
    <> 
    <Router>
      <UserProvider>
        <Layout>
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/">
              <Home />  
            </Route>
          </Switch>
        </Layout>
      </UserProvider>
    </Router>

    </>

  )

}

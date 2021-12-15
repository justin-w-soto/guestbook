import react from 'react'
import { Header } from './components/Layout/Header'
import { Home } from './views/Home/Home'
import { GuestBook } from './components/GuestBook/GuestBook'


export default function App() {
  return (
    <>    
    <Header />
    <Home />
    <GuestBook/>
    <h1>Go Away</h1>;
    </>

  )
  
 
  

  
}

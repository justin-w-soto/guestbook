import react from 'react'
import { Header } from './components/Layout/Header'
import { Home } from './views/Home/Home'
import { GuestBook } from './components/GuestBook/GuestBook'
import { Footer } from './components/Layout/Footer'


export default function App() {
  return (
    <> 
       
    <Header />
    <Home />
    <GuestBook/>
    <Footer />

    </>

  )
  
 
  

  
}

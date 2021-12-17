import react from 'react'
import { Header } from './components/Layout/Header'
import { GuestBook } from './components/GuestBook/GuestBook'
import { Footer } from './components/Layout/Footer'
import { EntryProvider } from './context/EntryContext'


export default function App() {
  return (
    <> 
    <EntryProvider> 
    <Header />
    <GuestBook/>
    <Footer />
    </EntryProvider>

    </>

  )
  
 
  

  
}

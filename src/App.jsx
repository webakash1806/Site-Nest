
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import ServiceCard from './Components/ServiceCard'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

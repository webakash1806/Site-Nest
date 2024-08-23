
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import ServiceCard from './Components/ServiceCard'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App

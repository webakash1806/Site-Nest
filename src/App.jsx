
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import ServiceCard from './Components/ServiceCard'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import WebService from './Pages/WebService'
import EcommerceService from './Pages/EcommerceService'

const App = () => {
  return (
    // <div className='w-full overflow-x-hidden'>
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/About'} element={<AboutPage />} />
        <Route path={'/services/web-services'} element={<WebService />} />
        <Route path={'/services/ecommerce-services'} element={<EcommerceService />} />
      </Routes>
      <Footer />
    </>
    // </div>
  )
}

export default App

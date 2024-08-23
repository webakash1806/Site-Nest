
import React from 'react'
import { Routes } from 'react-router-dom'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import ServiceCard from './Components/ServiceCard'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App

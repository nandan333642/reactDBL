import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import {Home, Events, About, Service, Gallery, Teams} from './pages'
import { DBEvent } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/*" element={<Events/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events/:eventName" element={<DBEvent/>} />
        <Route path="/teams" element={<Teams/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
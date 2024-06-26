import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import OurStory from './pages/ourStory/OurStory'
import OurProducts from './pages/ourProducts/OurProducts'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='ourStory' element={<OurStory/>}/>
        <Route path='ourProducts' element={<OurProducts/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
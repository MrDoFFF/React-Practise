import Contact from './pages/contact'
import Home from './pages/home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import {  HelmetProvider } from 'react-helmet-async';
import Wishlist from './pages/wishlist'

function App() {


  return (
    <>
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<p>salam pasyak bura deyil</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App

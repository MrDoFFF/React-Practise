import './App.css'
import Home from './pages/home'
import Details from './pages/details'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
function App() {
  return (
    <>
     <HelmetProvider>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id"  element={<Details />} />
      </Routes>
    </BrowserRouter>
     </HelmetProvider>
    </>
  )
}

export default App

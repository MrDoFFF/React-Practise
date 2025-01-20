
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from './pages/AddPage';
import UserLayouts from './layouts/UserLayouts';
import Home from './pages/Home';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLayouts />}>
              <Route index element={<Home />} />
              <Route path="/addproduct" element={<AddPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App

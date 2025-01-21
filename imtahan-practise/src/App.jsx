import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from './Layout/Layouts';
import Home from './pages/Home';
import AddPage from './pages/AddPage';
import NoPage from './pages/NoPage';

function App() {


  return (
    <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route index element={<Home />} />
              <Route path='addproduct' element={<AddPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App

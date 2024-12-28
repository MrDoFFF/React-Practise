import './App.css';
import AdminAdd from './pages/AdminAdd';
import AdminTable from './pages/AdminTable';
import AdminUpdate from './pages/AdminUpdate';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import AdminNavBar from './pages/AdminLayout';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="adminlayout" element={<AdminNavBar />}>
          <Route index element={<AdminTable />} />
            <Route path="adminadd" element={<AdminAdd />} />
          
            <Route path="adminupdate" element={<AdminUpdate />} />
          </Route>
          <Route path="*" element={"Not Found"}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

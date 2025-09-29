import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from './assets/components/AppNavbar';
import AppFooter from './assets/components/AppFooter';
import AppMain from './assets/components/AppMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagina2 from './assets/components/Pagina2';
import Pagina3 from './assets/components/Pagina3';
import Pagina4 from './assets/components/Pagina4';

function App() {
  

  return (
    <>
        <BrowserRouter>
        <AppNavbar/>
        <Routes >
          <Route path="/" element={<AppMain/>} />
          <Route path="/Pagina2" element={<Pagina2/>} />
          <Route path="/Pagina4" element={<Pagina4/>}/>
          <Route path="/Pagina3" element={<Pagina3/>}/>
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  )
}

export default App

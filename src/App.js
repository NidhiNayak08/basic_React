
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './components/Navbar';

function App() {

  return (
   
   <BrowserRouter>
   <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>



   </Routes>
   
   </BrowserRouter>
  );
}

export default App;

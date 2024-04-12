
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './pages/Contact';



function App() {
  return (
   
      <>
        <BrowserRouter>
        <div className='login_logout'>
        <Link to="/home">Login</Link>
        <Link to="/">Logut</Link>
        </div>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

      </>
    
  );
}

export default App;


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './pages/Contact/Contact';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import NavHeader from './components/NavHeader/NavHeader';
import NavHeading from './components/NavHeading/NavHeading';

function App() {

const [loggedIn, setloggedIn] = useState(true)
const [loggedOut, setloggedOut] = useState(false)

const handleLogin = ()=>{
  setloggedIn(!loggedIn);
  setloggedOut(!loggedOut);
}


  
  return (
   
      <>
        <BrowserRouter>
        <div className='login_logout'>
        {loggedIn?<Link to="/home" onClick={handleLogin}>Login</Link>:""}
        {loggedOut?<Link to="/" onClick={handleLogin}>Logut</Link>:""}
        </div>
        <NavHeader />
        <NavHeading />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/home/:id' element={<DetailsPage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>

      </>
    
  );
}

export default App;

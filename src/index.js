import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    
    
      <BrowserRouter>
      <App />
      <Routes>
            
            <Route path='/contact' element={<Contact />}></Route>
            
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);



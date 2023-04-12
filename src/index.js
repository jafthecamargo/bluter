import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Nosotros from './Nosotros';
import Login from './Login';
import SignIn from './SignIn';
import UserContent from "./UserContent";
import Informe from "./Informe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='test' element={<UserContent />} />
          <Route path='app' element={<App />} />
          <Route path='informe' element={<Informe />} />
      </Routes>
  </BrowserRouter>
);

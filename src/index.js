import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import SignIn from './SignIn';
import Formulario from "./Formulario";
import Informe from "./Informe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='app' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='informe' element={<Informe />} />
          <Route path='formulario' element={<Formulario />} />
      </Routes>
  </BrowserRouter>
);

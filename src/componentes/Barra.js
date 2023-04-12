import React from "react";
import '../styles/Barra.css';
import logo from '../img/logo.png';

function signin() {
    window.location.href = '/signin';
}

function login() {
    window.location.href = '/signin';
}

function Barra() {
    return (
        <div>
            <nav>
                <img className='barra-logo' src={logo} alt='univcon'></img>
                <ul className='ul1'>
                    <li className='barra-nav'><a href='/' className='ini'>Inicio</a></li>
                    <li className='barra-nav2'><a href="/nosotros" className='nos'>Nosotros</a></li>
                    <li className='barra-nav2'><a href='/signin' className='tes'>Test Vocacional</a></li>
                </ul>
                    <button onClick={signin} className='iniciasesion'>Inicia Sesión</button>
                    <button onClick={login} className='registrate'>Regístrate</button>
            </nav>
        </div>
    );
}

export default Barra;

import React from "react";
import {Link} from "react-router-dom";
import './App.css';
import './styles/Barra.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import logo from "./img/bluter.svg";
import arrow from "./img/arrow.svg";
import heart from "./img/heart.svg";
import firma from "./img/firma.png";

function App() {

    function signin() {
        window.location.href = '/signin';
    }

    function login() {
        window.location.href = '/signin';
    }

  return (
    <div className='d00' id='inicio'>

        <div className='d0'>
            <div className="navbar">
                <img className='barra-logo' src={logo} alt='bluter'></img>
                <Link to="/">Inicio</Link>
                <Link to="/acerca-de">Acerca de</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <button onClick={signin} className='iniciasesion'>Inicia Sesión</button>
            <button onClick={login} className='registrate'>Regístrate</button>
            <div className='d01'>
                <h2>Sistema de Apoyo para Donativos Sanguíneos</h2>
            </div>
            <div className='d02'>
                <p className='txt1'>Únete y ayuda a salvar vidas. Regístrate como donante voluntario y haz solicitudes de donación en caso de necesitar una transfusión.</p>
            </div>
            <button className='boton1' onClick={signin}>Regístrate ahora</button>
            <img className='arrow' src={arrow} alt='arrow'></img>
            <img className='img1' src={img1} alt='img1'></img>
        </div>

        <div className='d1'>
            <img className='img2' src={img2} alt='img2'></img>
            <div className='d001'>
                <p className='txt2'>En Bluter, el proceso es muy sencillo. Los usuarios pueden
                    registrarse y crear un perfil indicando si están disponibles para donar sangre.
                    Si necesitan una donación, pueden hacer una solicitud en la plataforma.
                    <br></br>Bluter se encarga de buscar donantes disponibles cercanos al solicitante y
                    enviarles una notificación para que puedan responder a la solicitud.
                    <br></br>Una vez que un donante acepta la solicitud, el solicitante recibe los detalles
                    necesarios para concertar una cita para la donación.
                    <br></br><br></br>¡Así de fácil es salvar vidas con Bluter!</p>
                <img className='heart' src={heart} alt='heart'></img>
                <img className='firma' src={firma} alt='firma'></img>
            </div>
        </div>

        <div className='d2'>

            <div className='d-foot'>
                <img className='f-img' src={logo} alt='bluter'></img>
                <a className='f-text'>© 2022 UNIVCON Todos los derechos reservados.</a>
                <a className='f-policies' href='/'>Política de Privacidad</a>
            </div>
        </div>

    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Barra from "./componentes/Barra";
import Desarrollo from "./componentes/Desarrollo";
import foot from "./img/foot.png";

function Nosotros() {
    return (
        <div className='d0'>
            <Barra />
            <div id='nosotros' className='d4'>
                <h2 className='text-nos'>NOSOTROS</h2>
                <div className='div1'>
                    <Desarrollo nombre = 'Jafthe Camargo' imagen='jafthe'/>
                </div>
                <div className='div2'>
                    <Desarrollo nombre = 'Joshua Pastern' imagen='joshua'/>
                </div>
                <div className='div3'>
                    <Desarrollo nombre = 'Julio Cesar'imagen='julio'/>
                </div>
            </div>
            <img className='foot' src={foot} alt='univcon'></img>
            <a className='f-text'>© 2022 UNIVCON Todos los derechos reservados.</a>
            <a className='f-policies' href='/'>Política de Privacidad.</a>
        </div>
    );
}

export default Nosotros;

import React, {useEffect} from "react";
import './App.css';
import logo from "./img/bluter.svg";
import Swal from "sweetalert2";

function Informe() {

    const[data, setData] = React.useState([]);

    function test() {
        window.location.href = '/test';
    }
    function inicio() {
        window.location.href = '/';
    }

    const cerrarSesion = () => {
        cerrar();
    }

    const cerrar = () => {
        Swal.fire({
            title: "¡Sesión cerrada con éxito!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    return (
        <div className='d0'>
            <div className='d00'>
                <h2 className='text-inf'>INFORME</h2>
                <table className='universidades'>
                    <tr className='h3'>UNIVERSIDADES</tr>
                    <tbody className='uni'>
                    {data.map(data => <tr>{data.unv1}</tr>)}
                    {data.map(data => <tr>{data.unv2}</tr>)}
                    {data.map(data => <tr>{data.unv3}</tr>)}
                    {data.map(data => <tr>{data.unv4}</tr>)}
                    {data.map(data => <tr>{data.unv5}</tr>)}
                    </tbody>
                </table>
                <table className='extras'>
                    <tbody>
                    <div className='usuario'>
                    <tr className='h3'>USUARIO</tr>
                    </div>
                    <div className='area'>
                    <tr className='h3'>ÁREA</tr>
                    {data.map(data => <tr>{data.area}</tr>)}
                    </div>
                    </tbody>
                </table>
            </div>
            <button className='rt' onClick={test}>Realizar Test</button>
            <button className='cerrar' onClick={cerrarSesion}>Cerrar Sesión</button>
            <div className='div5'>
                <img className='f-img' src={logo} alt='bluter'></img>
                <a className='f-text'>© 2022 UNIVCON Todos los derechos reservados.</a>
                <a className='f-policies' onClick={inicio}>Política de Privacidad.</a>
            </div>
        </div>
    );
}

export default Informe;

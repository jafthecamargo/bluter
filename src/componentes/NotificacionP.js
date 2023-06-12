import React from "react";
import '../styles/Notificaciones.css';
import ok from "../img/ok.svg";
import n from "../img/not.svg";
import Swal from "sweetalert2";

function NotificacionOK(props) {

    const yes = () => {
        Swal.fire({
            title: "Aceptada",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

     const not = () => {
        Swal.fire({
            title: "Rechazada",
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    return (
        <div className='cc'>
            <button className='ff'>{props.fecha}</button>
            <div className='txt'>
                <p className='nombre'>{props.nombre}</p>
                <p className='dir'>{props.dir}</p>
            </div>
            <div className='yes' onClick={yes}>
                <img className='img-ok1' src={ok} alt='ok'></img>
            </div>
            <div className='not' onClick={not}>
                <img className='img-not' src={n} alt='not'></img>
            </div>
        </div>
    );
}

export default NotificacionOK;

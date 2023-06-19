import React from "react";
import "../styles/Notificaciones.css";
import ok from "../img/ok.svg";
import n from "../img/not.svg";
import Swal from "sweetalert2";
import axios from "axios";

function NotificacionOK(props) {
  let correo = "jethrocamargo@gmail.com";
  let asunto;
  let texto;

  const enviarCorreo = () => {
    const correoData = {
      destino: correo,
      asunto: asunto,
      texto: texto,
    };

    axios
      .post("http://localhost:3001/enviar-correo", correoData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("Error al enviar el correo: ", error);
      });
  };
  /** --------------------------------------------------------------------*/

  const yes = () => {
    Swal.fire({
      title: "Aceptada",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    asunto = "BLUTER - ACEPTADA";
    texto = "Tu solicitud fue correctamente aceptada";
    enviarCorreo();
  };

  const not = () => {
    Swal.fire({
      title: "Rechazada",
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    asunto = "BLUTER - RECHAZADA";
    texto = "Lamentablemente tu solicitud fue rechazada";
    enviarCorreo();
  };

  return (
    <div className="cc">
      <button className="ff">{props.fecha}</button>
      <div className="txt">
        <p className="nombre">{props.nombre}</p>
        <p className="dir">{props.dir}</p>
      </div>
      <div className="yes" onClick={yes}>
        <img className="img-ok1" src={ok} alt="ok"></img>
      </div>
      <div className="not" onClick={not}>
        <img className="img-not" src={n} alt="not"></img>
      </div>
    </div>
  );
}

export default NotificacionOK;

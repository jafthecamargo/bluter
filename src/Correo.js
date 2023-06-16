import React, { useState } from "react";
import axios from "axios";

function Correo() {
  const [correoDestino, setCorreoDestino] = useState("");
  const [cuerpo, setCuerpo] = useState("");

  const enviarCorreo = () => {
    const datosCorreo = {
      destino: correoDestino,
      cuerpo: cuerpo,
    };

    axios
      .post("http://localhost:3001/enviar-correo", datosCorreo)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("Error al enviar el correo: ", error);
      });
  };

  return (
    <>
      <form onSubmit={enviarCorreo}>
        <div>
          <label>
            Correo:
            <input
              type="email"
              value={correoDestino}
              onChange={(e) => {
                setCorreoDestino(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cuerpo del correo:
            <textarea
              value={cuerpo}
              onChange={(e) => {
                setCuerpo(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <button>Enviar correo</button>
        </div>
      </form>
    </>
  );
}

export default Correo;

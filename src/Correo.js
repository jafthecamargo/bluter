import React, { useState } from "react";
import axios from 'axios';

function Correo() {
  const [correo, setCorreo] = useState("");
  const [cuerpo, setCuerpo] = useState("");

  const enviarCorreo = () => {
    const correoData = {
      destino: correo,
      cuerpo: cuerpo
    };

    axios
      .post('http://localhost:3001/enviar-correo', correoData)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.log('Error al enviar el correo: ', error);
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
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
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
          <button type="submit">Enviar correo</button>
        </div>
      </form>
    </>
  );
}

export default Correo;

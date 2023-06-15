import React, { useState } from "react";

function Correo() {
  const [correo, setCorreo] = useState("");
  const [cuerpo, setCuerpo] = useState("");

  function sendEmail() {
    const emailData = {
      to: "angelvargasvelez21@gmail.com",
      subject: "¡Hola soy una prueba!",
      content: "Este es un correo electronico de prueba.",
    };

    fetch("http://localhost:3001/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {})
      .catch((error) => {});
  }

  return (
    <>
      <form onSubmit={sendEmail}>
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
          <button>Enviar correo</button>
        </div>
      </form>
    </>
  );
}

export default Correo;

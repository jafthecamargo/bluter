import React, { useState } from "react";

function Correo() {
  const [correo, setCorreo] = useState("");
  const [cuerpo, setCuerpo] = useState("");

  return (
    <>
      <form
        onSubmit={() => {
          alert("el valor de correo es: " + correo + '\n y el valor del cuerpo es: ' + cuerpo);
        }}
      >
        <div>
          <label>
            Correo:
            <input type="email" value={correo} onChange={(e)=>{setCorreo(e.target.value)}} />
          </label>
        </div>

        <div>
          <label>
            Cuerpo del correo:
            <textarea value={cuerpo} onChange={(e)=>{setCuerpo(e.target.value)}}/>
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

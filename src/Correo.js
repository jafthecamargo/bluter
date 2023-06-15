import React, {useState} from "react";

function Correo() {

  const [correo, setCorreo] = useState('')

  return (
    <>
      <form onSubmit={()=>{
        alert('Correo enviado')
      }}>
        <div>
          <label>
            Correo:
            <input
              type="email"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cuerpo del correo:
            <textarea
              onChange={(e) => {
                console.log(e.target.value);
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

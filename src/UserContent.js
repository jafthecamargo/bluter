import React from "react";
import './App.css';
import foot from "./img/foot.png";
import Barra from "./componentes/Barra";
import Pregunta from "./componentes/Pregunta";

function UserContent() {

    return (
        <div className='d0'>
            <Barra />
            <div className='d00'>
                <h2 className='text-test'>TEST</h2>
                <p className='text-p'>
                    Para realizar este test vocacional, es necesario que respondas todas las
                    preguntas del formulario de manera honesta y sincera.
                    Cada pregunta tiene como objetivo conocer tus intereses, habilidades y
                    preferencias en cuanto a trabajo se refiere.<br></br><br></br>
                    Al finalizar, obtendrás un
                    resultado que te indicará el área profesional que mejor se adapta a tu perfil,
                    así como el Top 5 de las mejores universidades en México para ti.
                    <br></br><br></br>Te recomendamos dedicar un tiempo adecuado a cada pregunta para obtener resultados
                    precisos. ¡Buena suerte!
                </p>
            </div>
            <Pregunta />
            <div className='div6'>
                <img className='foot' src={foot} alt='univcon'></img>
                <a className='f-text'>© 2022 UNIVCON Todos los derechos reservados.</a>
                <a className='f-policies' href='#inicio'>Política de Privacidad.</a>
            </div>
        </div>
    );
}

export default UserContent;

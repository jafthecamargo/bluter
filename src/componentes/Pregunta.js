import React, {useEffect} from "react";
import '../styles/Pregunta.css';
import Swal from "sweetalert2";

function Pregunta() {

    function informe() {
        window.location.href = '/signin';
    }

    function process() {
        Swal.fire({
            text: "Espera, estamos analizando los resultados . . .",
            timer: 10000,
            allowOutsideClick: false,
            timerProgressBar: true,
            imageWidth: 430,
            imageHeight: 230,
            imageAlt: 'Match Image',
            showConfirmButton: false,
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                done();
                setTimeout(informe, 2000);
            }
        });
    }

    const done = () => {
        Swal.fire({
            title: '¡Completado!',
            text: 'Los resultados han sido analizados.',
            icon: 'success',
            showConfirmButton: false,
        });
    }

    function form() {
        process();
        const form = document.getElementById("form");
        const data = {
            p1: parseInt(form.elements.p1.value),
            p2: parseInt(form.elements.p2.value),
            p3: parseInt(form.elements.p3.value),
            p4: parseInt(form.elements.p4.value),
            p5: parseInt(form.elements.p5.value),
            p6: parseInt(form.elements.p6.value),
            p7: parseInt(form.elements.p7.value),
            p8: parseInt(form.elements.p8.value),
            p9: parseInt(form.elements.p9.value),
            p10: parseInt(form.elements.p10.value),
            p11: parseInt(form.elements.p11.value),
            p12: parseInt(form.elements.p12.value),
            p13: parseInt(form.elements.p13.value),
            p14: parseInt(form.elements.p14.value),
            p15: parseInt(form.elements.p15.value),
            p16: parseInt(form.elements.p16.value),
            p17: parseInt(form.elements.p17.value),
            p18: parseInt(form.elements.p18.value),
            p19: parseInt(form.elements.p19.value),
            p20: parseInt(form.elements.p20.value),
            p21: parseInt(form.elements.p21.value),
            p22: parseInt(form.elements.p22.value),
            p23: parseInt(form.elements.p23.value),
            p24: parseInt(form.elements.p24.value),
            p25: parseInt(form.elements.p25.value),
            p26: parseInt(form.elements.p26.value),
            p27: parseInt(form.elements.p27.value),
            p28: parseInt(form.elements.p28.value),
            p29: parseInt(form.elements.p29.value),
            p30: parseInt(form.elements.p30.value),
            p31: parseInt(form.elements.p31.value),
            p32: parseInt(form.elements.p32.value),
            p33: parseInt(form.elements.p33.value),
            p34: parseInt(form.elements.p34.value),
        }
    }

    return (
        <div className='d22'>
                <form id='form'>
                    <div className='d11'>
                        <p className='pp'>¿Con qué frecuencia lees?</p>
                        <input id='p1' className='checkmark' type="radio" name="p1" value="1"/><label> Nunca</label><br/>
                        <input id='p1' className='checkmark' type="radio" name="p1" value="2"/><label> De vez en cuando</label><br/>
                        <input id='p1' className='checkmark' type="radio" name="p1" value="3"/><label> Siempre que tengo ocasión</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Qué haces cuando estás enfermo y te mandan tomar un medicamento?</p>
                        <input id='p2' className='checkmark' type="radio" name="p2" value="1"/><label> Sencillamente lo tomo</label><br/>
                        <input id='p2' className='checkmark' type="radio" name="p2" value="2"/><label> Miro qué contraindicaciones puede tener</label><br/>
                        <input id='p2' className='checkmark' type="radio" name="p2" value="3"/><label> Leo el prospecto de arriba a abajo</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Tu nota media de matemáticas en la preparatoria fue de:</p>
                        <input id='p3' className='checkmark' type="radio" name="p3" value="1"/><label> Entre 5 y 6.9</label><br/>
                        <input id='p3' className='checkmark' type="radio" name="p3" value="2"/><label> Entre 7 y 8.9</label><br/>
                        <input id='p3' className='checkmark' type="radio" name="p3" value="3"/><label> Entre 9 y 10   </label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>El trato con animales:</p>
                        <input id='p4' className='checkmark' type="radio" name="p4" value="1"/><label> Me es indiferente</label><br/>
                        <input id='p4' className='checkmark' type="radio" name="p4" value="2"/><label> Me resulta interesante</label><br/>
                        <input id='p4' className='checkmark' type="radio" name="p4" value="3"/><label> Me encanta</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Del 1 al 10 ¿con qué soltura te desenvuelves con la computadora?</p>
                        <input id='p5' className='checkmark' type="radio" name="p5" value="1"/><label> Del 0 al 5</label><br/>
                        <input id='p5' className='checkmark' type="radio" name="p5" value="2"/><label> Del 5 al 7</label><br/>
                        <input id='p5' className='checkmark' type="radio" name="p5" value="3"/><label> Del 7 al 10</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Estarías  de  acuerdo  en  trabajar  en  una  revista  de  economía  escribiendo artículos?</p>
                        <input id='p6' className='checkmark' type="radio" name="radio6" value="1"/><label> Preferiría no tener que hacerlo</label><br/>
                        <input id='p6' className='checkmark' type="radio" name="radio6" value="2"/><label> Sí, me gustaría</label><br/>
                        <input id='p6' className='checkmark' type="radio" name="radio6" value="3"/><label> Sería un trabajo muy gratificante</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Te interesa saber cómo funcionan aparatos que usas a diario como el celular, la televisión o la computadora?</p>
                        <input id='p7' className='checkmark' type="radio" name="p7" value="1"/><label> Nada</label><br/>
                        <input id='p7' className='checkmark' type="radio" name="p7" value="2"/><label> Algo</label><br/>
                        <input id='p7' className='checkmark' type="radio" name="p7" value="3"/><label> Mucho</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Cuando quieres comprarte algo:</p>
                        <input id='p8' className='checkmark' type="radio" name="p8" value="1"/><label> Pides todo el dinero a tus padres</label><br/>
                        <input id='p8' className='checkmark' type="radio" name="p8" value="2"/><label> Pides una parte del dinero a tus padres</label><br/>
                        <input id='p8' className='checkmark' type="radio" name="p8" value="3"/><label> Ahorras y lo compras cuando haya reunido todo el dinero</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>En general ¿te gusta resolver problemas matemáticos?</p>
                        <input id='p9' className='checkmark' type="radio" name="p9" value="1"/><label> Nada</label><br/>
                        <input id='p9' className='checkmark' type="radio" name="p9" value="2"/><label> Algo</label><br/>
                        <input id='p9' className='checkmark' type="radio" name="p9" value="3"/><label> Mucho</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>El funcionamiento de la célula te parece:</p>
                        <input id='p10' className='checkmark' type="radio" name="p10" value="1"/><label> Indiferente</label><br/>
                        <input id='p10' className='checkmark' type="radio" name="p10" value="2"/><label> Interesante</label><br/>
                        <input id='p10' className='checkmark' type="radio" name="p10" value="3"/><label> Fascinante</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Perteneces a alguna asociación de ayuda social?</p>
                        <input id='p11' className='checkmark' type="radio" name="p11" value="1"/><label> No entra en mis planes</label><br/>
                        <input id='p11' className='checkmark' type="radio" name="p11" value="2"/><label> Es algo que quiero hacer más adelante</label><br/>
                        <input id='p11' className='checkmark' type="radio" name="p11" value="3"/><label> Ya participóactivamente en una</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Los artículos de divulgación científica te parecen:</p>
                        <input id='p12' className='checkmark' type="radio" name="p12" value="1"/><label> Aburridos</label><br/>
                        <input id='p12' className='checkmark' type="radio" name="p12" value="2"/><label> Entretenidos</label><br/>
                        <input id='p12' className='checkmark' type="radio" name="p12" value="3"/><label> Muy interesantes</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>En general ¿has obtenido buenas calificaciones en actividades de laboratorio?</p>
                        <input id='p13' className='checkmark' type="radio" name="p13" value="1"/><label> Regulares</label><br/>
                        <input id='p13' className='checkmark' type="radio" name="p13" value="2"/><label> Buenas</label><br/>
                        <input id='p13' className='checkmark' type="radio" name="p13" value="3"/><label> Muy buenas</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Te gustaría estudiar en profundidad un idioma?</p>
                        <input id='p14' className='checkmark' type="radio" name="p14" value="1"/><label> Me resulta aburrido</label><br/>
                        <input id='p14' className='checkmark' type="radio" name="p14" value="2"/><label> Es algo que tengo planeado en el futuro</label><br/>
                        <input id='p14' className='checkmark' type="radio" name="p14" value="3"/><label> Ya estoy haciéndolo</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Cómo te sientes cuando hablas en público?</p>
                        <input id='p15' className='checkmark' type="radio" name="p15" value="1"/><label> Incómodo</label><br/>
                        <input id='p15' className='checkmark' type="radio" name="p15" value="2"/><label> No tengo ningún inconveniente en hacerlo con frecuencia</label><br/>
                        <input id='p15' className='checkmark' type="radio" name="p15" value="3"/><label> Me encanta ser el centro de atención</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Tratas  de  entender  el  comportamiento  de  tus  amigos  cuando  surge  un problema?</p>
                        <input id='p16' className='checkmark' type="radio" name="p16" value="1"/><label> Es algo que no me preocupa</label><br/>
                        <input id='p16' className='checkmark' type="radio" name="p16" value="2"/><label> Muestro cierta empatía</label><br/>
                        <input id='p16' className='checkmark' type="radio" name="p16" value="3"/><label> Intento profundizar todo lo posible en el asunto</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Tu nota media de biología en la preparatoria fue de:</p>
                        <input id='p17' className='checkmark' type="radio" name="p17" value="1"/><label> Entre 5 y 6.9</label><br/>
                        <input id='p17' className='checkmark' type="radio" name="p17" value="2"/><label> Entre 7 y 8.9</label><br/>
                        <input id='p17' className='checkmark' type="radio" name="p17" value="3"/><label> Entre 9 y 10</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Te gusta la vida rural?</p>
                        <input id='p18' className='checkmark' type="radio" name="p18" value="1"/><label> No, deseo vivir siempre en la ciudad</label><br/>
                        <input id='p18' className='checkmark' type="radio" name="p18" value="2"/><label> No me importa pasar algunas temporadas en el campo</label><br/>
                        <input id='p18' className='checkmark' type="radio" name="p18" value="3"/><label> Es un estilode vida que me encanta</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Si te hacen una extracción de sangre</p>
                        <input id='p19' className='checkmark' type="radio" name="p19" value="1"/><label> Me mareo tan solo de ver la aguja</label><br/>
                        <input id='p19' className='checkmark' type="radio" name="p19" value="2"/><label> Me siento tranquilo</label><br/>
                        <input id='p19' className='checkmark' type="radio" name="p19" value="3"/><label> Converso con la enfermera</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Te consideras una persona creativa e imaginativa?</p>
                        <input id='p20' className='checkmark' type="radio" name="p20" value="1"/><label> Poco</label><br/>
                        <input id='p20' className='checkmark' type="radio" name="p20" value="2"/><label> Algo</label><br/>
                        <input id='p20' className='checkmark' type="radio" name="p20" value="3"/><label> Mucho</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Tienes un registro personal de gastos?</p>
                        <input id='p21' className='checkmark' type="radio" name="p21" value="1"/><label> No, no lo necesito</label><br/>
                        <input id='p21' className='checkmark' type="radio" name="p21" value="2"/><label> Sí, anoto las cosas más importantes</label><br/>
                        <input id='p21' className='checkmark' type="radio" name="p21" value="3"/><label> Sí, tengo un registro muy detallado</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Las técnicas de primeros auxilios...</p>
                        <input id='p22' className='checkmark' type="radio" name="p22" value="1"/><label> No tengo pensado aprenderlas</label><br/>
                        <input id='p22' className='checkmark' type="radio" name="p22" value="2"/><label> Me parecen importantes</label><br/>
                        <input id='p22' className='checkmark' type="radio" name="p22" value="3"/><label> Las conozco a la perfección</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Cuando un amigo no entiende algo:</p>
                        <input id='p23' className='checkmark' type="radio" name="p23" value="1"/><label> Ignoro su problema</label><br/>
                        <input id='p23' className='checkmark' type="radio" name="p23" value="2"/><label> Le explico las cosas por encima</label><br/>
                        <input id='p23' className='checkmark' type="radio" name="p23" value="3"/><label> Le ayudo hasta que lo comprende por completo</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>En comparación con gente de tu edad, destacas en música, creatividad u otra forma de arte</p>
                        <input id='p24' className='checkmark' type="radio" name="p24" value="1"/><label> Nada</label><br/>
                        <input id='p24' className='checkmark' type="radio" name="p24" value="2"/><label> Algo</label><br/>
                        <input id='p24' className='checkmark' type="radio" name="p24" value="3"/><label> Mucho</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Qué haces si sientes alguna dolencia?</p>
                        <input id='p25' className='checkmark' type="radio" name="p25" value="1"/><label> La ignoro a menos que permanezca de manera prolongada</label><br/>
                        <input id='p25' className='checkmark' type="radio" name="p25" value="2"/><label> Voy al doctor en un plazo razonable</label><br/>
                        <input id='p25' className='checkmark' type="radio" name="p25" value="3"/><label> Siempre que tengo ocasióBusco información en Internet, consulto a algún conocido y voy al doctor</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Cuando tienes que explicar algo a otra persona...</p>
                        <input id='p26' className='checkmark' type="radio" name="p26" value="1"/><label> Me desespero si no me entiende a la primera</label><br/>
                        <input id='p26' className='checkmark' type="radio" name="p26" value="2"/><label> Trato de ser claro</label><br/>
                        <input id='p26' className='checkmark' type="radio" name="p26" value="3"/><label> Se lo repito con calma las veces que haga falta</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Con qué frecuencia visitas una exposición artística?</p>
                        <input id='p27' className='checkmark' type="radio" name="p27" value="1"/><label> Nunca</label><br/>
                        <input id='p27' className='checkmark' type="radio" name="p27" value="2"/><label> Cuando me parece interesante</label><br/>
                        <input id='p27' className='checkmark' type="radio" name="p27" value="3"/><label> Siempre que tengo ocasión</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Qué haces cuando se descompone algún electrodoméstico en casa?</p>
                        <input id='p28' className='checkmark' type="radio" name="p28" value="1"/><label> Lo llevo al servicio técnico</label><br/>
                        <input id='p28' className='checkmark' type="radio" name="p28" value="2"/><label> Trato de repararlo</label><br/>
                        <input id='p28' className='checkmark' type="radio" name="p28" value="3"/><label> Leo el instructivo, busco información en Internet y hago todo lo posible por arreglarlo</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>Cuando sales con los amigos...</p>
                        <input id='p29' className='checkmark' type="radio" name="p29" value="1"/><label> Tratas de evitar ir a bailar</label><br/>
                        <input id='p29' className='checkmark' type="radio" name="p29" value="2"/><label> No te desagrada tener que ir a bailar</label><br/>
                        <input id='p29' className='checkmark' type="radio" name="p29" value="3"/><label> Propones con frecuencia ir a bailar</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Trabajarías en tus ratos libres como profesor particular?</p>
                        <input id='p30' className='checkmark' type="radio" name="p30" value="1"/><label> Bajo ningún concepto</label><br/>
                        <input id='p30' className='checkmark' type="radio" name="p30" value="2"/><label> Lo haría en caso de que necesitara el dinero</label><br/>
                        <input id='p30' className='checkmark' type="radio" name="p30" value="3"/><label> Sin ninguna duda</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Qué haces cuando tienes una meta bien definida?</p>
                        <input id='p31' className='checkmark' type="radio" name="p31" value="1"/><label> Espero tener suerte para alcanzarla</label><br/>
                        <input id='p31' className='checkmark' type="radio" name="p31" value="2"/><label> Me esfuerzo por lograrla</label><br/>
                        <input id='p31' className='checkmark' type="radio" name="p31" value="3"/><label> Me trazo un plan bien detallado para alcanzarla</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Prefieres trabajar con máquinas o con personas?</p>
                        <input id='p32' className='checkmark' type="radio" name="p32" value="1"/><label> Con personas, siempre</label><br/>
                        <input id='p32' className='checkmark' type="radio" name="p32" value="2"/><label> Me es indiferente, aunque utilizo con soltura las máquinas</label><br/>
                        <input id='p32' className='checkmark' type="radio" name="p32" value="3"/><label> Con máquinas, siempre</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Qué tipo de estudios te gustaría hacer?</p>
                        <input id='p33' className='checkmark' type="radio" name="p33" value="1"/><label> Carrera</label><br/>
                        <input id='p33' className='checkmark' type="radio" name="p33" value="2"/><label> Maestría</label><br/>
                        <input id='p33' className='checkmark' type="radio" name="p33" value="3"/><label> No estoy interesado en estudiar</label><br/>
                    </div>
                    <br/>
                    <div className='d11'>
                        <p className='pp'>¿Dónde te gustaría estudiar?</p>
                        <input id='p34' className='checkmark' type="radio" name="p34" value="1"/><label> En mi país</label><br/>
                        <input id='p34' className='checkmark' type="radio" name="p34" value="2"/><label> En otro país</label><br/>
                        <input id='p34' className='checkmark' type="radio" name="p34" value="3"/><label> En otro país si consiguiera financiación</label><br/>
                    </div>
                    <br/>
                    <button className='datos' type="button" onClick={form}>Enviar datos</button>
                </form>
        </div>
    );
}

export default Pregunta;

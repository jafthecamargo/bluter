import React from "react";
import './App.css';
import Barra from "./componentes/Barra";
import ilu from './img/Milestone.svg';
import group from './img/Group.svg';
import foot from './img/foot.png';

function App() {

    function signin() {
        window.location.href = '/signin';
    }

  return (
    <div className='d0' id='inicio'>
        <Barra />
            <img className='ilu' src={ilu} alt='ilu'></img>
            <div className='d1'>
                <div className='d2'>
                    <h2>NO SABES QUE ESTUDIAR?</h2>
                </div>
                <div className='d3'>
                    <p className='intro'>Regístrate o inicia sesión para poder realizar
                    nuestro test y encontrar la mejor opción para ti.</p>
                </div>
                <button className='test' onClick={signin}>Realiza el Test</button>
            </div>
        <h3 className='eslogan'>"Descubre tu vocación con Univcon, elige el camino correcto desde el principio."</h3>
        <div className='div32'>
            <p className='p21'>Sabias que? En México, se estima que el 50% de los estudiantes universitarios deserte antes de graduarse.
                Además, se ha observado que los estudiantes de nivel socioeconómico bajo tienen una tasa
                de deserción más alta en comparación con los estudiantes de nivel socioeconómico alto.</p>
        </div>
        <div className='div31'>
            <p className='p22'>Al conocer mejor sus preferencias y habilidades, los estudiantes pueden
                tomar decisiones más informadas sobre su educación y carrera, lo que puede ayudarles
                a evitar la deserción escolar ya que es un problema importante en muchos países,
                incluyendo México.<br></br><br></br>Al proporcionar a los estudiantes herramientas para
                encontrar su vocación y tomar decisiones educativas informadas, podemos ayudar
                a reducir la deserción escolar y mejorar el éxito académico y laboral de los estudiantes.</p>
        </div>
        <img className='gp' src={group} alt='group'></img>
        <div className='div-foot'>
        <img className='foot' src={foot} alt='univcon'></img>
        <a className='f-text'>© 2022 UNIVCON Todos los derechos reservados.</a>
        <a className='f-policies' href='/'>Política de Privacidad</a>
        </div>
    </div>
  );
}

export default App;

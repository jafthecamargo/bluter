import React, {useEffect} from "react";
import { app } from "./fb";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import './styles/App.css';
import './styles/Principal.css';
import logo from "./img/bluter.svg";
import Swal from "sweetalert2";
import Centros from "./componentes/Centros";
import NotificacionOK from "./componentes/NotificacionOK";
import NotificacionP from "./componentes/NotificacionP";
import TipoS from "./componentes/TipoS";

function Principal() {

    const[data, setData] = React.useState([]);

    const uid = app.auth().currentUser.email;

    function form() {
        window.location.href = '/formulario';
    }

    function redirect() {
        window.location.href = 'https://www.gob.mx/insabi/articulos/14-de-junio-dia-mundial-del-donante-de-sangre-274570';
    }

    function cnts() {
        window.location.href = 'https://www.gob.mx/cnts';
    }

     function imss() {
        window.location.href = 'https://bancodesangre.imss.gob.mx/apopsbs-publico/login';
    }

     function cruzroja() {
        window.location.href = 'https://www.cruzrojamexicana.org.mx/offsite/donar-sangre';
    }

    const cerrarSesion = () => {
        app.auth().signOut();
        cerrar();
    }

    const postular = () => {
        Swal.fire({
            title: "Postular",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    const cerrar = () => {
        Swal.fire({
            title: "¡Sesión cerrada con éxito!",
            text: app.auth().currentUser.email,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "informes");
        let queryFilter;
        if (app.auth().currentUser.email === uid) {
            queryFilter = query(queryCollection, where('email', '==', uid));
        } else {
            queryFilter = queryCollection;
        }
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(informe => ({id: informe.id, email: informe.data().email, ...informe.data()}))))
    }, [uid]);


    return (
        <div>
            <div className='d00'>
                <img className='f-img-ini' src={logo} alt='bluter'></img>
                <p className='user'>{app.auth().currentUser.email}</p>
                <button className='cerrar' onClick={cerrarSesion}>Cerrar Sesión</button>
            </div>
            <div className='noti'>
                <div className='n1'>
                    <NotificacionOK nombre = 'Donación de Sangre' dir = 'Cruz Roja' fecha = '22  DIC' hora = '12:10'/>
                </div>
                <div className='n2'>
                    <NotificacionP nombre = 'Solicitud de Donación' dir = 'Itzel Ramírez' fecha = '06 SEP'/>
                </div>
                <button className='alert' onClick={redirect}>Día Mundial del Donante de Sangre</button>
            </div>
            <div className='centrosd'>
                <h4>Centros de Donación</h4>
                <div className='cd1' onClick={cnts}>
                    <Centros nombre = 'Centro Nacional de la Transfusión Sanguínea' dir = 'Miguel Othón de Mendizabal Ote. 555, Nueva Industrial Vallejo, Gustavo A. Madero, CDMX' imagen='1.jpeg'/>
                </div>
                <div  className='cd2' onClick={imss}>
                    <Centros nombre = 'Banco Central de Sangre IMSS' dir = 'Seris, La Raza, Azcapotzalco, CDMX' imagen='2.jpg'/>
                </div>
                <div  className='cd3' onClick={cruzroja}>
                    <Centros nombre = 'Banco de Sangre Cruz Roja Mexicana CDMX' dir = 'Benito Pérez Galdós 137 Colonia Los Morales, Polanco, Primera Sección, CDMX' imagen='3.jpeg'/>
                </div>
            </div>
            <div className='blood'>
                <button className='tipo'>O+</button>
                <div className='info'>
                    <p>Nombre:</p>
                    <p>Edad:</p>
                    <p>Sexo:</p>
                    <p>Peso:</p>
                </div>
                <div className='info1'>
                    <p>Jafthe</p>
                    <p>21</p>
                    <p>Hombre</p>
                    <p>56.5 kg</p>
                </div>
                <div className='t1'>
                    <TipoS tipo = 'A+' color = '#BCDDF1'/>
                </div>
                <div className='t2'>
                    <TipoS tipo = 'A-' color = '#44A3CA'/>
                </div>
                <div className='t3'>
                    <TipoS tipo = 'B+' color = '#D5303B'/>
                </div>
                <div className='t4'>
                    <TipoS tipo = 'B-' color = '#ED752F'/>
                </div>
                <div className='t5'>
                    <TipoS tipo = 'AB+' color = '#834484'/>
                </div>
                <div className='t6'>
                    <TipoS tipo = 'AB-' color = '#8567A5'/>
                </div>
                <div className='t7'>
                    <TipoS tipo = 'O+' color = '#E5D8C1'/>
                </div>
                <div className='t8'>
                    <TipoS tipo = 'O-' color = '#CABDAF'/>
                </div>
                <button className='soli' onClick={form}>Solicitar</button>
                <button className='pos' onClick={postular}>Postular</button>
            </div>
        </div>
    );
}

export default Principal;

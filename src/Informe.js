import React, {useEffect} from "react";
import { app } from "./fb";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import './styles/App.css';
import './styles/Informe.css';
import logo from "./img/bluter.svg";
import Swal from "sweetalert2";

function Informe() {

    const[data, setData] = React.useState([]);

    const uid = app.auth().currentUser.email;

    function form() {
        window.location.href = '/formulario';
    }

    const cerrarSesion = () => {
        app.auth().signOut();
        cerrar();
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
            <button className='form' onClick={form}>Formulario</button>
        </div>
    );
}

export default Informe;

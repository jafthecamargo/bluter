import React from "react";
import { app } from "./fb";
import './styles/App.css';
import './styles/Login.css';
import logo from "./img/bluter.svg";
import arrow from "./img/arrow-left.svg";
import fondo from "./img/fondo.png";
import imgg from "./img/img3.jpg";
import Swal from "sweetalert2";


function back() {
    window.location.href = '/';
}
function Login(props) {

    const [isRegistered, setIsRegistered] = React.useState(false);

    const crearUsuario = (email, pass) => {
        app
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(userFirebase => {
                console.log("Usuario Creado: ", userFirebase);
                props.setUser(userFirebase);
                registrado();
            })
            .catch(error => {
                errorUsuario();
            });
    };

    const iniciarSesion = (email, pass) => {
        app
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(userFirebase => {
                console.log("Usuario Iniciado: ", userFirebase.user);
                props.setUser(userFirebase);
                iniciado();
            })
            .catch(error => {
                errorSesion();
            });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const date = e.target.date.value;
        const peso = e.target.peso.value;
        const id = e.target.id.value;
        console.log(email,pass);

        if(isRegistered) {
            crearUsuario(email, pass);
        }

        if(!isRegistered) {
            iniciarSesion(email, pass);
        }
    };

    const registrado = () => {
        Swal.fire({
            title: "¡Usuario registrado con éxito!",
            text: app.auth().currentUser.email,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    const iniciado = () => {
        Swal.fire({
            title: "¡Bienvenido!",
            text: app.auth().currentUser.email,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    const errorSesion = () => {
        Swal.fire({
            title: "¡Error!",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            button: "Aceptar",
            allowOutsideClick: false,
        });
    }

    const errorUsuario = () => {
        Swal.fire({
            title: "¡Error!",
            text: "El usuario ya existe",
            icon: "error",
            button: "Aceptar",
            allowOutsideClick: false,
        });
    }

    return (
        <div>
            <img className='fondo' src={fondo} alt='fondo-bluter'></img>
               {isRegistered ? (
                <>
                    <div className='div100'>
                        <img className='imgg' src={imgg} alt='img-bluter'></img>
                        <form onSubmit={submitHandler}>
                                <div className='form-group3'>
                                    <label className='cc'>Correo</label>
                                    <input className='ccc' type='email' id='email' placeholder='Ingresa tu correo electrónico'/>
                                </div>
                                <div className='form-group4'>
                                    <label className='con'>Contraseña</label>
                                    <input className='conn' type='password' id='password' placeholder='Ingresa una contraseña' />
                                </div>
                                <div className='form-group5'>
                                    <label className='fecha'>Fecha de Nacimiento</label>
                                    <input className='date' type='date' id='date' />
                                </div>
                                <div className='form-group6'>
                                    <label className='pp'>Peso</label>
                                    <input className='peso' type='number' id='peso' placeholder='Ingresa tu peso en Kg' />
                                </div>
                                <div className='form-group7'>
                                    <label className='id1'>Identificación Oficial</label>
                                    <input className='id2' type='file' id='id' />
                                </div>
                                <button className='sub2' type='submit'>Registrarse</button>
                            </form>
                        <p className='text-1'>Si ya tienes una cuenta.</p>
                        <button id='iniciasesion' className='extra-1' onClick={() => setIsRegistered(!isRegistered)}>Inicia Sesión</button>
                    </div>
                    <div className='div11' onClick={back}>
                        <img className='back' src={arrow} alt='back' onClick={back}></img>
                    </div>
                </>
                ) : (
                    <>
                        <div className='div10'>
                            <h3 className="ini">Inicia Sesión</h3>
                            <form onSubmit={submitHandler}>
                                <div className='form-group1'>
                                    <label className='correo'>Correo</label>
                                    <input className='mail' type='email' id='email' placeholder='Ingresa tu correo electrónico'/>
                                </div>
                                <div className='form-group2'>
                                    <label className='contraseña'>Contraseña</label>
                                    <input className='pass' type='password' id='password' placeholder='Ingresa una contraseña' />
                                </div>
                                <button className='sub1' type='submit'>Ingresar</button>
                            </form>
                            <p className='text-2'>Si aún no tienes una cuenta.</p>
                            <button id='registrate' className='extra-2' onClick={() => setIsRegistered(!isRegistered)}>Regístrate</button>
                        </div>
                        <img className='f-img1' src={logo} alt='bluter'></img>
                        <div className='div11' onClick={back}>
                            <img className='back' src={arrow} alt='back' onClick={back}></img>
                        </div>
                    </>
                )}
        </div>
    );
};

export default Login;

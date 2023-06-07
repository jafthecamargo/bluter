import React, { useEffect } from "react";
import {app} from "./fb";
import './App.css';
import Informe from "./Informe";
import Login from "./Login";

function SignIn() {

    const [user, setUser] = React.useState(null);
    useEffect( () => {
        app.auth().onAuthStateChanged(userFirebase => {
            console.log("Estado de usuario: ", userFirebase);
            setUser(userFirebase);
        });
    },[] )

    return <> {user ? <Informe /> : <Login setUser={setUser} />}</>;

}

export default SignIn;

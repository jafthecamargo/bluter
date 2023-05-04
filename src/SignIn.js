import React, { useEffect } from "react";
import './App.css';
import Informe from "./Informe";
import Login from "./Login";

function SignIn() {

    const [user, setUser] = React.useState(null);

    return <> {user ? <Informe /> : <Login setUser={setUser} />}</>;

}

export default SignIn;

import React from "react";
import '../styles/Desarrollo.css';

function Desarrollo(props) {
    return (
        <div className="card">
            <img className="card-img" src={require(`../img/${props.imagen}.jpg`)} alt='Foto'></img>
            <div className="card-info">
                <p className="text-body">{props.nombre}</p>
                <p className="text-title">CEO</p>
            </div>
        </div>
    );
}

export default Desarrollo;

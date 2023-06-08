import React from "react";
import '../styles/Marco.css';

function Marco(props) {
    return (
        <div className="card">
            <img className="card-img" src={require(`../img/${props.imagen}`)} alt='foto'></img>
            <p className="text-body">{props.nombre}</p>
            <p className="text-title">CEO</p>
        </div>
    );
}

export default Marco;

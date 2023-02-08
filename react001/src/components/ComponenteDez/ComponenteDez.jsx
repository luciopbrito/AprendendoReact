import React from "react";

export default (props) => {
    return (
    <div className="componente">
        <p className="titulo">Título: {props.titulo}</p>
        <p style={{color: props.corTexto}}>Texto do parágrafo</p>
    </div>
    )
}
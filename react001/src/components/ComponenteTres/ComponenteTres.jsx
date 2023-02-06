import React from "react";

const ComponenteTres = (props) => {

    return (
        <div className="componente">
            <p>Titulo: {props.titulo}</p>
            <p>Subtitulo: {props.subtitulo}</p>
        </div>
    )
} 

export default ComponenteTres;
import React from "react";

function ComponenteFilho(props){
    return (
        <div className="componente">
            <p class="titulo">Titulo: {props.titulo}</p>
            <p>Cargo: {props.cargo} - {props.children}</p>
        </div>
    )
}

export default ComponenteFilho;
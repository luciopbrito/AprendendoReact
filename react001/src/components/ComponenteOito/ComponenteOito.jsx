import React from "react";

export default function(props){

    function condicao(){
       switch (props.valor) {
        case "joao":
            return <p>É o meu nome</p>
        case "ana":
            return <p>É o da minha irmã</p>       
        default:
            return <p>Desconheço quem tenha esse nome</p>
       }
    }

    return(
        <div className="componente">
            <p className="titlo">Título: {props.titulo}</p>
            {condicao()}
        </div>
    )
}
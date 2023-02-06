import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor == "joao"}>
                <p>Verdadeiro, é o meu nome</p>
            </CondicaoIf>
        
            <CondicaoIf condicao={props.valor == "ana"}>
                <p>É a minha irmã</p>
            </CondicaoIf>
          
            <CondicaoIf condicao={props.valor != "joao" && props.valor != "ana"}>
                <p>Desconheço este nome</p>
            </CondicaoIf>

        </div>
    )
}
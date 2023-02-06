import React from "react";

export default function(props) {
    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo}</p>
            {
                props.valor?
                    <div>
                        <p>Análise do Valor</p>
                        <p>Verdadeiro</p>
                    </div>
                :
                    <div>
                        <p>Análise do Valor</p>
                        <p>Falso</p>
                    </div>
            }
        </div>
    )
}
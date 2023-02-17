import React from "react";

export default (props) => {

    var valor1 = 0;

    function executar () {
        valor1 = Math.random()
        props.funcao("Valor: " + valor1, "joao");
    }

    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo}</p>
            <button onClick={executar}>Executar</button>
            <p>{valor1}</p>
        </div>
    )
}
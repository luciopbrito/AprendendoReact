import React from "react";
import ComponenteFilho from "../ComponenteFilho/ComponenteFilho";

function ComponentePai(props){
    return (
        <div className="componente">
            <p class="titulo">Titulo: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                João Ribeiro
            </ComponenteFilho>
            <ComponenteFilho titulo="Componente Filho" cargo="secretária">
                Ana Silva
            </ComponenteFilho>
            <ComponenteFilho titulo="Componente Filho" cargo="operador">
                Carlos Santos
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai;
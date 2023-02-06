import React from "react";
import clientes from "../../dados_clientes/dados_clientes"

const ComponenteSeis = (props) => {
    
    function cliente(){
        return clientes.map(e => {
            return <li key={e.id_cliente}>Nome: {e.nome} | Email: {e.email}</li>
        });
    }

    return (
        <div className="componente">
            <p className="titulo">{props.titulo}</p>
            <ul>
                {cliente()}
            </ul>
        </div>
    )
}

export default ComponenteSeis;
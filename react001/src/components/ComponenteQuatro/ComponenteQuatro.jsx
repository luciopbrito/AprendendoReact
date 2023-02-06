import React from "react";

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            {props.children}   
            <p>Título: {props.titulo}</p>
        </div>
    )
}

export default ComponenteQuatro;
import React, { useState } from 'react'

export default function App(){

    const [valor, setValor] = useState(0)

    // var valor = 0;

    // function incrementar(){
    //     valor++;
    //     console.log(valor);
    // }

    function incrementar(){
        setValor(valor + 1);
    }

    return (
        <>
            <h1>Hook</h1>
            <h3>Valor = {valor}</h3>
            <button onClick={incrementar}>Incrementar</button>
        </>
    )
}
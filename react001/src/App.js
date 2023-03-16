import React, { useState } from 'react'
import './App.css';

export default function App(){

    const [valor, setValor] = useState(10)

    function decremento(){
        setValor(valor - 1);
    }

    function incremento(){ 
        setValor(valor + 1);
    }

    return (
        <>
            <h1>React Hook</h1>
            <p>Valor: {valor}</p>
            <button onClick={decremento}>Decremento</button>
            <button onClick={incremento}>Incremento</button>
        </>
    )
}
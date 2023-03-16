import React, { useState } from 'react'
import './App.css';

export default function App(){

    const [valor, setValor] = useState(100)

    function diminuir(){
        setValor(valor_antigo => valor_antigo - 1)
        setValor(valor_antigo => valor_antigo - 1)
        setValor(valor_antigo => valor_antigo - 1)
    }

    function aumentar(){
        setValor(valor_antigo => valor_antigo + 1)
        setValor(valor_antigo => valor_antigo + 1)
        setValor(valor_antigo => valor_antigo + 1)
    }

    return (
        <>
            <h1>React Hook</h1>
            <button onClick={diminuir}>Diminuir</button>
            <span>Valor: {valor}</span> 
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}
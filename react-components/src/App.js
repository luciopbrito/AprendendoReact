import React from "react";
import './App.css';
import Modura from './componets/modura/Modura';
import logoOxxo from './assets/imgs/logo_oxxo.png';

function App(){
    return (
        <>
            <div className="container">
                <Modura direction="top" />
                <div>
                    <img src={logoOxxo} alt="logo oxxo" />
                </div>
                <Modura direction="bottom" />
            </div>
        </>
    )
}

export default App
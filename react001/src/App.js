import React from "react";
import "./index.css"
import Texto from "./components/Texto"

function App(){
    return (
        <div>
            <h1>Olá React</h1>
            <Texto></Texto>
            <Texto />
        </div>
    )
}

export default App;
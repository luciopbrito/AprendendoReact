import React from "react";
import "./index.css"
import ComponenteUm from "./components/ComponenteUm/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro/ComponenteQuatro";

function App(){
    return (
        <div>            
            <ComponenteQuatro titulo="Componente Quatro"/>             

            <ComponenteTres titulo="Componente Três" subtitulo="Texto do Componente Três"/>
            
            <ComponenteDois />
            
            <ComponenteUm />
        </div>
    )
}

export default App;
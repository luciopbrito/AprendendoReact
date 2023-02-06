import React from "react";
import "./App.css"
import ComponenteUm from "./components/ComponenteUm/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito/ComponenteOito";

function App(){
    return (
        <div>            
            <ComponenteOito titulo="Componente Sete" valor="pedro"/>
            
            <ComponenteSete titulo="Componente Sete" valor={0}/>

            <ComponenteSeis titulo="clientes"/>
            
            <ComponenteQuatro titulo="Componente Quatro"/>             

            <ComponenteTres titulo="Componente Três" subtitulo="Texto do Componente Três"/>
            
            <ComponenteDois />
            
            <ComponenteUm />
        </div>
    )
}

export default App;
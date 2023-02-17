import React from "react";
import "./App.css"
import ComponenteUm from "./components/ComponenteUm/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove/ComponenteNove";
import ComponenteDez from "./components/ComponenteDez/ComponenteDez";
import ComponentePai from "./components/comunicacao_direta/ComponentePai/ComponentePai";
import ComponenteMae from "./components/comunicao_indireta/ComponenteMae/ComponenteMae";
import ComponenteA from "./components/comunicacao_indireta_2/ComponenteA/ComponenteA";

function App(){
    return (
        <div>   

            <ComponenteA titulo="Comunicação Indireta v2" />

            <ComponenteMae titulo="Comunicação Indireta" ></ComponenteMae>

            <ComponentePai titulo="Comunicação Direta" />

            <ComponenteDez titulo="Componente Dez" corTexto="green"/>

            <ComponenteNove titulo="Componente Nove" valor="pedro"/>         
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
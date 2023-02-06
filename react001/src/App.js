import React from "react";
import "./index.css"
import ComponenteUm from "./components/ComponenteUm/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres/ComponenteTres";

function App(){
    return (
        <div>
            <ComponenteTres titulo="teste"/>
            <ComponenteDois />
            <ComponenteUm />
        </div>
    )
}

export default App;
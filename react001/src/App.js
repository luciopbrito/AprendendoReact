import React from "react";
import "./index.css"
import Comment from "./components/Comment/Comment";

function App(){
    return (
        <div>
            <h1>Comentários</h1>
            <Comment title="Comentário Um" author="João Ribeiro"/>
            <Comment title="Comentário Dois" author="Ana Silva"/>
            <Comment title="Comentário Três" author="Carlos Alberto"/>
        </div>
    )
}

export default App;
import React from "react";
import "./Comment.css";

function Comment(){
    return (
        <>
            <section className="comment">
                <p className="title">Título</p>
                <p className="text">Comentário</p>
                <p className="author">Autor: X</p>
            </section>
        </>
    )
}

export default Comment;
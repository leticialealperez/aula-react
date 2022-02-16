import React from "react";

export default function Titulo(props){
    return(
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </>
    )
}
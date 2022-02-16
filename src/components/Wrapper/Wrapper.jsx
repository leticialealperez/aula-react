import './Wrapper.css';
import React from "react";
import Card from "../cards/Card";

export default function Rapper(){

    return(
        <div className="wrapper">
            <Card tituloCard="Título Card1" subtituloCard="Corpo do Card1"/>
            <Card tituloCard="Título Card2" subtituloCard="Corpo do Card2"/>
            <Card tituloCard="Título Card3" subtituloCard="Corpo do Card3"/>
            <Card tituloCard="Título Card4" subtituloCard="Corpo do Card4"/>
        </div>
    )
}
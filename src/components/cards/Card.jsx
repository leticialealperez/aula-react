import './Card.css';
import React from "react";

export default function Card(props){
    
    
    return(
        <div className='container'>
            <div className="card">
                <h4>{props.tituloCard}</h4>
                <p>{props.subtituloCard}</p>
            </div>
        </div>
        
    );
}


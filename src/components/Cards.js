import React from "react";
import Deck from "Deck.js";

const Cards = ({ id,color,number, name}) => {
    return (
        <div className="cardContainer">
            <div className = {'card-container_inner ${name}'}>
                <div className = {'card-container-inner_border ${color}'}>
                    <p>{number}</p>
                </div>
            </div>
        </div>
        
    )
}
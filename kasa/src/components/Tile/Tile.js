import React from "react";
import "./Tile.css";

function Tile({id, image, titre}) {
    return(
        <div className="tile" id={id}>
            <img className="tile-image" src={image} alt="tile"/>
            <div className="tile-sombre"></div>
            <span className="tile-titre">{titre}</span>
        </div>
    );
}

export default Tile;
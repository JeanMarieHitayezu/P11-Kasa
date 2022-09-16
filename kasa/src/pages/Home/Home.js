import React from "react";
import Banner from "@/components/Banner/Banner";
import banniereAccueil from "@/img/Pages/Home/Banner.png";
import { NavLink } from "react-router-dom";
import Tile from "@/components/Tile/Tile";
import ListeLogements from "@/data/housing.json";
import "./Home.css";

function Home() {
    return(
        <div className="Home">
            <Banner image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Tile key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Home;
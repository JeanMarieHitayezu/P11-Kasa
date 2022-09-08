import React from "react";
import "./Header.css";
import logoHeader from "@/img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/" className="lien-site" style={({ isActive }) => isActive ? {borderBottom: "1px solid #ff6060"} : { borderBottom: "unset" }}>Home</NavLink>
                <NavLink to="/a-propos" className="lien-site" style={({ isActive }) => isActive ? {borderBottom: "1px solid #ff6060"} : { borderBottom: "unset" }}>About</NavLink>
            </nav>
        </header>
    );
}

export default Header;
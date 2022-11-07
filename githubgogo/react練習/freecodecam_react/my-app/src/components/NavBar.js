import React from "react";
import Bogi from "../image/React-icon.svg";


export default function Navbar(){
    return(
        <nav>
            <img className="nav--icon" src={Bogi} alt=""/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
        )
}
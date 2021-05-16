import React from "react";
import "./Header.css";
import greeting from "../../portfolioDetails";
import Headroom from "react-headroom";

function Header() {
    return (
    <Headroom>  {/* show nabvar when required else hidden. it is a react library*/}
        
        <header className="header" id="header">
        <a href="" className="logo">
        
        <span className="grey-color"> &lt;</span>  
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
        
        </a>
        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
        </label>
        <ul className="menu">
        <li>
            <a href="#about" data-content="About">About</a>
        </li>
        <li>
            <a href="#skills" data-content="Skills">Skills</a>
        </li>
        
        <li>
            <a href="#projects" data-content="Projects">Projects</a>
        </li>
        
        <li>
            <a href="#contact" data-content="Contact Me">Contact Me</a>
        </li>
        </ul>
        
    </header>
    </Headroom>
);
}
export default Header;
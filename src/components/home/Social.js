import React from "react";
import {  FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/_dharani_damodaran_/?hl=en" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiInstagram />
            </a>
            <a href="https://github.com/dashboard" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/dharani-d-19a879257/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;
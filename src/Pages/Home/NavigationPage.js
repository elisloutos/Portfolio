import React from "react";
import { NavLink } from "react-router-dom";

//Icons
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {IoCaretDownSharp} from "react-icons/io5"
import {GrMail} from "react-icons/gr"
import CvIcon from "../../Data/Images/CV-icon.png"
import ProfileImage from "../../Data/Images/p_2.jpeg"
//CSS
import '../../CSS/Navigation.css'

function NavigationPage(){
    return(
        <div>
            <div className="main-container">
                <div className="main-container-top">
                    <NavLink to="/home"><img className="main-container-top-image" alt="Profile Icon" src={ProfileImage}/></NavLink>
                    <span className="main-container-top-name">Elissaios Loutos</span>
                    
                </div>
                <div className="main-container-middle" >
                    <div className="main-container-middle-flexboxes-container"><a href="mailto: e.loutos8@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail className="main-container-middle-buttons-style"/></a></div>
                    <div className="main-container-middle-flexboxes-container"><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="main-container-middle-buttons-style"/></a></div>
                    <div className="main-container-middle-flexboxes-container"><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="main-container-middle-buttons-style"/></a></div>
                    <div className="main-container-middle-flexboxes-container"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img className="main-container-middle-buttons-style-cv" alt="CV Icon" src={CvIcon}/></a></div>  
                </div>
                <div className="main-container-bottom">
                    <NavLink className={({ isActive }) => (isActive ? 'main-container-bottom-button-active' : 'main-container-bottom-button')} to="/projects">Projects</NavLink>
                    <div className="main-container-bottom-button-dropdown">
                        <span className="main-container-bottom-button">Career <IoCaretDownSharp className="main-container-bottom-button-icons"/></span>
                        <div className="main-container-bottom-button-dropdown-check">
                            <NavLink className={({ isActive }) => (isActive ? 'main-container-bottom-buttom-dropdown-text-active' : 'main-container-bottom-buttom-dropdown-text')} to="/education">Education</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'main-container-bottom-buttom-dropdown-text-active' : 'main-container-bottom-buttom-dropdown-text')} to="/work">Work</NavLink>
                        </div>
                    </div>
                    <NavLink className={({ isActive }) => (isActive ? 'main-container-bottom-button-active' : 'main-container-bottom-button')} to="/skills">Skills</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavigationPage;
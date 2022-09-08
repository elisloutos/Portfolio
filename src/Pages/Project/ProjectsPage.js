import React from 'react'
import {Link } from "react-router-dom";
import "../../CSS/ProjectsPage.css"

function ProjectsPage({data}){
    return(
        <div id='ProjectsPage'>
                <div className='main-container'>
                    <div className="main-container2">
                        {data.projects && data.projects.map(({id, name, image}) =>{
                            return(
                                <div key={id} className="flexboxes-container">
                                    <Link className="flexboxes-container-link" to={`/projects/${id}`}>
                                        <img className="flexboxes-container-image" alt="Project Imsge" src={image}/>
                                        <div className="flexboxes-container-1">
                                        <span className="flexboxes-container-text">{name}</span>
                                        </div>
                                    </Link>
                                </div>
                            );
                            
                        })}  
                    </div>
                </div>
        </div>
    );
}

export default ProjectsPage;
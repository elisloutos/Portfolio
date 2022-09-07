import React from "react";
import { useParams } from "react-router-dom";
// CSS
import "../../CSS/Project.css"

function Project({data}){
    const {param_id} = useParams();
    return(
        <div id="Project">
            <div className="main-container">
                {/* Context */}
                <div className="main-container-context">
                    {/* TITLE */}
                    {data.projects.filter(project => project.id  == param_id)
                    .map((project) =>{
                        return(
                            <div key={project.id}>
                                <span className="main-container-context-title">{project.name} </span>
                            </div>
                        );           
                    })}  
                    {/* LINKS */}
                    <div  className="main-container-context-container-link">
                        {data.projects.filter(project => project.id  == param_id)
                        .map((project) =>{
                            return project.links.map(({link_id, link, image}) =>{
                                return(
                                    <div key={link_id}>
                                        <span><a href={link} target="_blank" ><img className="main-container-context-link-icon" alt="link Icon" src={image}/></a></span> 
                                    </div>
                                );
                            })        
                        })}
                    </div> 
                    
                    {/* CATEGORIES */}
                    <div className="main-container-context-container-category">
                        {/* Built Date */}
                        {data.projects.filter(project => project.id  == param_id)
                        .map((project) =>{
                            return(
                                <div key={project.id} className="main-container-context-container-category-flex">
                                    <span className="main-container-context-category-label">Build Date:</span><span className="main-container-context-category">{project.build_date}</span>
                                </div>
                            );           
                        })} 
                        {/* Category */}
                        <div className="main-container-context-container-category-flex">
                            <span className="main-container-context-category-label">Category:</span>
                            {data.projects.filter(project => project.id  == param_id)
                            .map((project) =>{
                                return project.category.map(({category_name}, index) =>{
                                    return(
                                        <div key={index} className="main-container-context-container-category-map">
                                            <span className="main-container-context-category">{category_name} </span>
                                        </div>
                                    
                                    );
                                })        
                            })}
                        </div>
                        {/* Language */}
                        <div className="main-container-context-container-category-flex">
                            <span className="main-container-context-category-label">Language:</span>
                            {data.projects.filter(project => project.id  == param_id)
                            .map((project) =>{
                                return project.language.map(({language_name}, index) =>{
                                    return(
                                        <div key={index} className="main-container-context-container-category-map">
                                            <span className="main-container-context-category">{language_name}</span>
                                        </div>
                                    
                                    );
                                })        
                            })}
                        </div>
                        {/* Tool */}
                        <div className="main-container-context-container-category-flex">
                            {data.projects.filter(project => project.id  == param_id)
                            .map((project) =>{
                                return project.tool_name.map(({tool_name}, index) =>{
                                    return(
                                        <div key={index} className="main-container-context-container-category-map">
                                            <span className="main-container-context-category-label-map">{tool_name}</span>
                                        </div>
                                    );
                                })        
                            })}
                            {data.projects.filter(project => project.id  == param_id)
                            .map((project) =>{
                                return project.tool.map(({tool_name}, index) =>{
                                    return(
                                        <div key={index} className="main-container-context-container-category-map">
                                            <span className="main-container-context-category">{tool_name}</span>
                                        </div>
                                    );
                                })        
                            })}
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    {data.projects.filter(project => project.id  == param_id)
                    .map((project) =>{
                        return(
                            <span key={project.id} className="main-container-context-text">{project.description}</span>
                        );           
                    })}  
                   
                    

                </div>
            </div>
        </div>
    );
}

export default Project;
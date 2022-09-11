import React from "react";
import "../../CSS/Skills.css"

function SkillsPage({data}){   
    return(
        <div id="Skills">
            <div className="main-container">
                {/* Programming Languages */}
                <div className="main-container-1">
                    <div className="main-container-header"><span className="main-container-context-title">Programming Languages</span></div>
                    <div className="main-container-main ">
                        {data.skills && data.skills.map(({programming_languages}) =>{
                            return programming_languages.map(({id, icon}) =>{
                                return(
                                    <div key={id} className="main-container-flexbox"><img className="main-container-context-image-langu" alt="CV Icon" src={icon}/></div>
                                );  
                            })                     
                        })}  
                    </div>
                    
                </div>
                {/* Tools */}
                <div className="main-container-1">
                    <div className="main-container-header"><span className="main-container-context-title">Tools</span></div>
                    <div className="main-container-main ">
                        {data.skills && data.skills.map(({tools}) =>{
                            return tools.map(({id, icon}) =>{
                                return(
                                    <div key={id} className="main-container-flexbox"><img className="main-container-context-image" alt="CV Icon" src={icon}/></div>
                                );  
                            })                     
                        })}  
                    </div>                   
                </div>
                {/* Framework and Engines */}
                <div className="main-container-1">
                    <div className="main-container-header"><span className="main-container-context-title">Frameworks & Engines</span></div>
                    <div className="main-container-main ">
                        {data.skills && data.skills.map(({frameworks_engines}) =>{
                            return frameworks_engines.map(({id, icon}) =>{
                                return(
                                    <div key={id} className="main-container-flexbox"><img className="main-container-context-image" alt="CV Icon" src={icon}/></div>
                                );  
                            })                     
                        })}  
                    </div>                   
                </div>
                {/* Spoken Languages */}
                <div className="main-container-1">
                    <div className="main-container-header"><span className="main-container-context-title">Spoken Languages</span></div>
                    <div className="main-container-main ">
                        {data.skills && data.skills.map(({spoken_languages}) =>{
                            return spoken_languages.map(({id, name, level}) =>{
                                return(
                                    <div key={id} className="main-container-flexbox">
                                        <span className="main-container-context-text">{name}<br/> Level: {level}</span>
                                    </div>
                                );  
                            })                     
                        })}  
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;
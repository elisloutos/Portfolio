import React from 'react'
import "../../CSS/Career.css"


function WorkPage({data}){
    return(
        <div id="Career">
            <div className="main-container">
                {/* Context */}
                {data.work && data.work.map(({id, name, date, description}) =>{
                            return(
                                <div key={id} className="main-container-context">
                                <span className="main-container-context-title">{name}</span>
                                <span className="main-container-context-year">{date}</span>
                                <span className="main-container-context-text">{description}</span>
                            </div>
                            );
                        })}  
            </div>
        </div>
    );
}

export default WorkPage;
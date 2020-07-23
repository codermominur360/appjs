import React from 'react'

const ProjectSummary =({project})=>{
    return(
        <div className="card">
            <div className="card-body">
                <p>{project.content}</p>
            </div>
            <div className="card-footer">
                <h4> {project.title}</h4>
                <i> 1 jun 2020 </i>
            </div>
        </div>
    )
}
export default ProjectSummary
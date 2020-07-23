import React from 'react'

const ProjectDetails =(props)=>{
    const id = props.match.params.id;
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-2">
                    <div className="card">
                        <div className="card-body">
                            <h6>this is tite => {id}</h6>
                            <p> this is body area content subject</p>
                            <hr/>
                            <p>Made by Mominur Rahman</p>
                            <div> 20 junuary 2020 12:20 AM</div>
                            <p></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails
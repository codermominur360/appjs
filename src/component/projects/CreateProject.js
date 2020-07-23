import React, { Component } from 'react';
import {projectAction} from '../../store/action/projectAction'
import {connect} from 'react-redux';

 class CreateProject extends Component {
     state={
        title:'',
        content:''
     }
     handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
     }
     handleSubmit = (e) => {
         e.preventDefault();
        //  console.log(this.state)
        this.props.createProjects(this.state)
     }
  render() {
    return (
        <div className="container">  
            <form onSubmit={this.handleSubmit} >
            <h4>Create a New Project nowtitle</h4>
            <div className="form-group">
                <label for="title">Title</label>
                <input name="title" type="title" className="form-control"  onChange={this.handleChange} placeholder="title"/>
            </div> 
            <div className="form-group">
                <label for="content">Content</label>
                <input name="content" type="content" className="form-control"  onChange={this.handleChange} placeholder="content"/>
            </div> 
            
            <div className="input-field">
                <button  className="btn btn-primary mt-4">Create Project</button>
            </div>
            </form>
    </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createProjects : (project)=>dispatch(projectAction(project))
    }
}

export default connect(null, mapDispatchToProps) (CreateProject)
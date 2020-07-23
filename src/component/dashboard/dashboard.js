import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux'
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
 class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const {projects}=this.props
    return (
      <div className='container'> 
        <div className="row">
            <div className="col-lg-5 offset-2 text-left">
                <ProjectList projects={projects}/>
            </div>
            <div className="col-lg-4">
                <Notification/>
            </div>
        </div>
      </div>
    );
  }
}

const mapToPropsState=(state)=>{ 
  console.log(state)
  return{
    projects: state.project.projects
  }
}

// export default connect(mapToPropsState)(Dashboard)

export default
compose(
  connect(mapToPropsState),
  // firestoreConnect([{collection: 'project'}])
)
(Dashboard);
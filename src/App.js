import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navber from './component/layout/Navbar';
import Dashboard from './component/dashboard/dashboard';
import ProjectDetails from './component/projects/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/projects/CreateProject';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <nav className="navber-nav">
          <Navber/>
       </nav>
       <Switch>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route  path="/project/:id" component={ProjectDetails}/>
         <Route  path="/signin" component={SignIn}/>
         <Route  path="/signup" component={SignUp}/>
         <Route  path="/createproject" component={CreateProject}/>
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

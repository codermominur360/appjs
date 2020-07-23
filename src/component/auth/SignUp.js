import React, { Component } from 'react';

 class SignUp extends Component {
     state={
        firstName:"",
        lastName:"",
        email:"",
        password:""
     }
     handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
     }
     handleSubmit = (e) => {
         e.preventDefault();
         console.log(this.state)
     }
  render() {
    return (
        <div className="container">  
            <form onSubmit={this.handleSubmit} >
            <h4 className="bg-danger text-white text-center p-3">LogIn</h4>
            <div className="form-group">
                <label for="firstName">FirstName</label>
                <input id="firstName" type="firstName" className="form-control"  onChange={this.handleChange} placeholder="first name"/>
            </div>
            <div className="form-group">
                <label for="lastName">LastName</label>
                <input id="lastName" type="lastName" className="form-control"  onChange={this.handleChange} placeholder="last name"/>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" className="form-control"  onChange={this.handleChange} placeholder="your@gmail.com"/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" className="form-control" onChange={this.handleChange} placeholder="password"/>
            </div>
            <div className="input-field">
                <button  className=" btn-block btn btn-success mt-4">SignUp</button>
            </div>
            </form>
    </div>
    );
  }
}
export default SignUp
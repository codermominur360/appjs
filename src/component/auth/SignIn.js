import React, { Component } from 'react';

 class SignIn extends Component {
     state={
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
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
            <form onSubmit={this.handleSubmit} >
            <h4 className="bg-danger text-white text-center p-3">LogIn</h4>
            <div className="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" className="form-control"  onChange={this.handleChange} placeholder="your@gmail.com"/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" className="form-control" onChange={this.handleChange} placeholder="your@gmail.com"/>
            </div>
            <div className="input-field">
                <button  className=" btn-block btn btn-primary mt-4">LogIn</button>
            </div>
            </form>
    </div>
    );
  }
}
export default SignIn
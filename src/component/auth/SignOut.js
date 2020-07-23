import React, { Component } from 'react';

  class SignOut extends Component {
  render() {
    return (
      <div className="container">  
          <form onSubmit={}>
            <h4 className="bg-danger text-white">LogIN</h4>
            <div className="input-field">
                <label for="email">Email</label>
                <input id="email" type="email" onChange={} placeholder="your@gmail.com"/>
            </div>
            <div className="input-field">
                <label for=" password">Password</label>
                <input id=" password" type=" password" onChange={} placeholder="your@gmail.com"/>
            </div>
            <div className="input-field">
                <button className="btn btn-primary">LogIn</button>
            </div>
          </form>
     </div>
    );
  }
}
export default SignOut
 
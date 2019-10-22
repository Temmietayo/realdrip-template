import React, { Component } from "react";
import "../assets/css/wardsignin.css";
import signin from "../assets/img/signin-2.svg";

class WardSignin extends Component {
  constructor() {
    super();
    this.state = {
      wardusername: null,
      wardpassword: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="signin-container">
          <div className="signin-image">
            <img src={signin} alt="" />
          </div>
          <div className="signin-div">
            <div className="signin-holder">
              <h6 className="welcome-text">Welcome Back!</h6>
              <h2 className="signin-header">Ward Sign In</h2>
              <form className="sign-form" onSubmit={this.handleSubmit}>
                <div className="form-div">
                  <div className="form-group">
                    <label htmlFor="wardusername">Ward Username</label>
                    <input
                      type="text"
                      id="wardusername"
                      name="wardusername"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="wardpassword">Password</label>
                    <input
                      type="password"
                      id="wardpassword"
                      name="wardpassword"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WardSignin;

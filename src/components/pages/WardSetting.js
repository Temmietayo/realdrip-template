import React, { Component } from "react";
import "../assets/css/setting.css";

export default class WardSetting extends Component {
  state = {
    username: null,
    password: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="container-set">
            <div className="row-set">
              <h3 className="header-1-set">Account Settings</h3>
            </div>
            <div className="column-set">
              <form
                className="align-item-center setting-form"
                OnSubmit={this.handleSubmit}
              >
                <label htmlFor="username">Ward Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Ward Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                />
                <button type="submit" className="update-setting">
                  Update
                </button>
              </form>
              <div className="align-item-center management">
                <span>
                  <p>
                    To change the password of this account, do login to
                    management account or inform the management
                  </p>
                </span>
                <button type="button" className="redirect">
                  login to management
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

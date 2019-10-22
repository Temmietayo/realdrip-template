import React, { Component } from "react";
import "../assets/css/addnurse.css";
import addUser from "../assets/img/add-user-button.svg";

export default class AddNurse extends Component {
  state = {
    name: "",
    hospital: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <span className="row nurse-link"> Nurses </span>
        <div className="addnurseForm">
          <h5 className="header-form">Add new nurse</h5>
          <form
            className="align-item-center nurse-form"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />
            <label htmlFor="hospital">Hospital ID no.</label>
            <input
              type="text"
              name="hospital"
              id="hospital"
              onChange={this.handleChange}
            />
            <p>Attach profile image</p>
            <label className="addPicture" htmlFor="nurseImg">
              <img className="small-icon pad-15" src={addUser} alt="" />
            </label>
            <input type="file" id="nurseImg" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

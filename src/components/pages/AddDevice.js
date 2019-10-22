import React, { Component } from "react";
import "../assets/css/adddevice.css";

export default class AddDevice extends Component {
  state = {
    device: "",
    label: ""
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
      <div>
        <div className="container">
          <div className="column">
            <h3 className="header-1">Add new device</h3>
            <form
              className="align-item-center add-device-form"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="device">Input Device ID</label>
              <input
                type="number"
                id="device"
                name="device"
                onChange={this.handleChange}
              />
              <label htmlFor="label">Label to put on device</label>
              <input
                type="text"
                id="label"
                name="label"
                onChange={this.handleChange}
              />
              <button type="submit" className="add-device">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../assets/css/deleteoperation.css";
import bin from "../assets/img/rubbish-bin-delete-button.svg";

export default class DeleteOperation extends Component {
  render() {
    return (
      <div>
        <div className="modal-container">
          <div className="modal">
            <span>
              <img src={bin} className="bin-icon" alt="" />
            </span>
            <span className="modal-header">Delete Operation</span>
            <span className="modal-text">
              <p>
                Are you sure you want to delete this operation ?, all stored
                information about this operation will be erased.
              </p>
            </span>
            <span>
              <button className="modal-button agree-button" type="submit">
                Yes delete
              </button>
              <button className="modal-button reject-button" type="submit">
                No
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

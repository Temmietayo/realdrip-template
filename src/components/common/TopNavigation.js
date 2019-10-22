import React from "react";
import "../assets/css/topbar.css";
import sortbar from "../assets/img/sort-button-with-three-lines-1.svg";

const TopNavigation = () => {
  return (
    <div className="container-top">
      <div className="row col-10-top top-bar">
        <div className="row">
          <span className="Image-topbar">
            <img
              src={sortbar}
              className="nav-img"
              alt=""
              style={{
                color: "#0E0840"
              }}
            />
          </span>
          <span className="row">
            <h3>RealDrip</h3>
            <button>Ward</button>
          </span>
        </div>

        <p className="align-item-left">How it Works</p>
      </div>
    </div>
  );
};

export default TopNavigation;

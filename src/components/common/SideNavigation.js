import React from "react";
import medroom from "../assets/img/medical-room.svg";
import nurse from "../assets/img/nurse-2.svg";
import setting from "../assets/img/settings-cogwheel-button.svg";
import dashboard from "../assets/img/dasshboard.svg";
import device from "../assets/img/devices.svg";
import { NavLink } from "react-router-dom";
import "../assets/css/sidebar.css";

const SideNavigation = () => {
  return (
    <div className="container-side">
      <div className="column col-1-side side-bar">
        <span className="first-element"></span>

        <span className="Image">
          <NavLink to="/home">
            <img src={dashboard} className="nav-img-side" alt="" />
          </NavLink>
        </span>

        <span className="Image">
          <NavLink to="/operations">
            <img src={medroom} className="nav-img-side" alt="" />
          </NavLink>
        </span>

        <span className="Image">
          <NavLink to="/devices">
            <img src={device} className="nav-img-side" alt="" />
          </NavLink>
        </span>

        <span className="Image">
          <NavLink to="nurses">
            <img src={nurse} className="nav-img-side" alt="" />
          </NavLink>
        </span>

        <span className="Image">
          <NavLink to="setting">
            <img
              src={setting}
              className="nav-img"
              alt=""
              style={{
                width: "18px",
                height: "18px"
              }}
            />
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default SideNavigation;

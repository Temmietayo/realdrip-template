import React, { Component } from "react";
import "../assets/css/device.css";
import nureseIcon from "../assets/img/nurse-1.svg";

export default class Devices extends Component {
  state = {
    activeInfusion: 6,
    activeNurses: 4
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="column-device container-device">
            <section className="row-device justify-content-space-between">
              <p className="header-1-device">Devices</p>
              <button className="add-device">Add new device</button>
            </section>
            <section className="row-device">
              <section className="column-device left-aside-device">
                <div className="see-devices">
                  <a href="#0" class="button12">
                    <em> </em>
                    <span>Active</span>
                  </a>
                  <a href="#0" class="button12">
                    <em> </em>
                    <span>All</span>
                  </a>
                </div>
              </section>
            </section>
            <section className="row-device">
              <section className="column-device left-aside-device">
                <div>
                  <p className="header-3-device">Summary</p>
                </div>
                <div className="row-device justify-content-space-between nowrap">
                  <div className="row-device">
                    {/* active infusion */}
                    <div className="column-device card-device nowrap card-view-small">
                      <span className="row-device align-items-center justify-content-space-between nowrap">
                        <p className="strong text-45 pad-15">
                          {" "}
                          {this.state.activeInfusion}{" "}
                        </p>
                        <img
                          className="small-icon pad-15"
                          src={nureseIcon}
                          alt=""
                        />
                      </span>
                      <span>
                        <p className="pad-lr-15"> Active Infusion </p>
                      </span>
                    </div>

                    {/* active nurses */}
                    <div className="column-device card-device nowrap card-view-small">
                      <span className="row-device align-items-center justify-content-space-between nowrap">
                        <p className="strong text-45 pad-15">
                          {" "}
                          {this.state.activeNurses}{" "}
                        </p>
                        <img
                          className="small-icon pad-15"
                          src={nureseIcon}
                          alt=""
                        />
                      </span>
                      <span>
                        <p className="pad-lr-15"> Active Nurses </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="device-in-use col-5-device">
                  <div className="column-device nowrap border-bottom">
                    <span className="row-device align-items-center justify-content-space-between nowrap">
                      <p className="strong text-45 pad-15"> 02 </p>
                      <img
                        className="small-icon pad-15"
                        src={nureseIcon}
                        alt=""
                      />
                    </span>
                    <span className="row-device nowrap justify-content-space-between">
                      <p className="pad-lr-15"> Device in use </p>
                      <p className="pad-lr-15"> 45 Idle </p>
                    </span>
                  </div>
                </div>
              </section>
              <section className="column-device col-3-device">
                <div>
                  <p className="header-3-device">Active Infusion</p>
                </div>
                <section className="active-infusion">
                  <div class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <thead>
                        <tr>
                          <th>Volume</th>
                          <th>Countdown</th>
                          <th>Flowrate</th>
                          <th>Nurse</th>
                          <th>Patient/Case</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td>89%</td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>89%</td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>89%</td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>89%</td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>89%</td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </section>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

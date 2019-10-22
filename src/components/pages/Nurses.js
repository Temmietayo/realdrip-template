import React, { Component } from "react";
import "../assets/css/nurses.css";
import nureseIcon from "../assets/img/nurse-1.svg";

export default class Nurses extends Component {
  state = {
    activeInfusion: 6,
    activeNurses: 4
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="column-nurse container">
            <section className="row-nurse justify-content-space-between">
              <p className="header-1-nurse">Devices</p>
              <button className="add-device">Add new device</button>
            </section>
            <section className="row-nurse">
              <section className="column-nurse left-aside-nurse">
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
            <section className="row-nurse">
              <section className="column-nurse left-aside-nurse">
                <div>
                  <p className="header-3-nurse">Summary</p>
                </div>
                <div className="row-nurse justify-content-space-between nowrap">
                  <div className="row-nurse">
                    <div className="device-in-use col-5-nurse">
                      <div className="column-nurse nowrap border-bottom">
                        <span className="row-nurse align-items-center justify-content-space-between nowrap">
                          <p className="strong text-45 pad-15"> 02 </p>
                          <img
                            className="small-icon pad-15"
                            src={nureseIcon}
                            alt=""
                          />
                        </span>
                        <span className="row-nurse nowrap justify-content-space-between">
                          <p className="pad-lr-15"> Device in use </p>
                          <p className="pad-lr-15"> 45 Idle </p>
                        </span>
                      </div>
                    </div>
                    <div className="row-nurse">
                      {/* active infusion */}
                      <div className="column-nurse card-nurse nowrap card-view-small">
                        <span className="row-nurse align-items-center justify-content-space-between nowrap">
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
                      <div className="column-nurse card-nurse nowrap card-view-small">
                        <span className="row-nurse align-items-center justify-content-space-between nowrap">
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
                </div>
              </section>
              <section className="column-nurse col-3">
                <div>
                  <p className="header-3-nurse">Active Infusion</p>
                </div>
                <section className="active-infusion">
                  <div className="tbl-content">
                    <table
                      className="tbl-content-table"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td className="tbl-data">
                            <span>
                              <img
                                src={nureseIcon}
                                className="table-img"
                                alt=""
                              />
                              &nbsp;&nbsp;Abraham Janet
                            </span>
                          </td>
                          <td>Frank Joseph</td>
                          <td className="tbl-data">01:00</td>
                        </tr>
                        <tr>
                          <td className="tbl-data">
                            <span>
                              <img
                                src={nureseIcon}
                                className="table-img"
                                alt=""
                              />
                              &nbsp;&nbsp; Alison Markson
                            </span>
                          </td>
                          <td> ... </td>
                          <td className="tbl-data">04:00</td>
                        </tr>
                        <tr>
                          <td className="tbl-data">
                            <span>
                              <img
                                src={nureseIcon}
                                className="table-img"
                                alt=""
                              />
                              &nbsp;&nbsp;Bashirat Muhameed
                            </span>
                          </td>
                          <td>Taofeek Lekan</td>
                          <td className="tbl-data">12:23</td>
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

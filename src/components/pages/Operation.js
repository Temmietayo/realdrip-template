import React, { Component } from "react";
import "../assets/css/operation.css";
import nureseIcon from "../assets/img/nurse-1.svg";

export default class Device extends Component {
  state = {
    activeInfusion: 6,
    activeNurses: 4
  };
  render() {
    return (
        <div>
          <div className="column-set container-set">
            <section className="row-set">
              <p className="header-1-set">Operations</p>
            </section>
            <section className="row-set">
              <section className="column-set left-aside-set">
                <div>
                  <p className="header-3-set">Summary</p>
                </div>
                <div className="row-set justify-content-space-between nowrap">
                  {/* Urgent card-set */}
                  <div className="card-set column-set justify-content-center align-items-center urgent-card-set">
                    <span className="addmargin">Urgent</span>
                    <span className="row-set justify-content-center align-items-center operation-no">
                      1<span className="operation-notification"></span>
                    </span>
                    <span>Operation</span>
                    <span className="small-text">is almost complete</span>
                  </div>

                  <div className="column-set-set">
                    {/* active infusion */}
                    <div className="column-set-set card-set nowrap card-set-view-small">
                      <span className="row-set align-items-center justify-content-space-between nowrap">
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
                    <div className="column-set-set card-set nowrap card-set-view-small">
                      <span className="row-set align-items-center justify-content-space-between nowrap">
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
              </section>
              <section className="column-set-set col-3-set">
                <div>
                  <p className="header-3-set">Active Infusion</p>
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
                          <td>
                            <span>
                              89% <p className="red-timeline"></p>
                              <p>Blood</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              13% <p className="green-timeline"></p>
                              <p>Saline</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              89% <p className="red-timeline"></p>
                              <p>Blood</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              13% <p className="green-timeline"></p>
                              <p>Saline</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              89% <p className="red-timeline"></p>
                              <p>Blood</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              13% <p className="green-timeline"></p>
                              <p>Saline</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              89% <p className="red-timeline"></p>
                              <p>Blood</p>
                            </span>
                          </td>
                          <td>12:23 pm</td>
                          <td>28 ml/hr</td>
                          <td>Titilayo Olaide</td>
                          <td>Taofeek/Malaria</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              13% <p className="green-timeline"></p>
                              <p>Saline</p>
                            </span>
                          </td>
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
          <div>
            <span className="green-timeline"></span>
          </div>
        </div>
    );
  }
}

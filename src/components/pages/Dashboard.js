import React, { Component } from "react";
import "../assets/css/dashboard.css";
import nureseIcon from "../assets/img/nurse-1.svg";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInfusion: 6,
      activeNurses: 4,
      textNotice: "Urgent",
      operationReading: "19",
      operationStatus: "almost complete"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ operationReading: event.target.value });
  }

  render() {
    let urgentCard = {
      width: "135px",
      height: "244px",
      background: "#FE454F",
      overflow: "hidden",
      color: "#FFFFFF",
      fontSize: "16px"
    };
    let operationNo = {
      color: "#FFFFFF",
      fontSize: "42px",
      textAlign: "center",
      fontWeight: "bold",
      width: "74px",
      height: "74px",
      borderRadius: "37px",
      background: "#D83B44",
      position: "relative",
      marginBottom: "25px"
    };
    const char = 15;
    if (this.state.operationReading > char) {
      urgentCard = {
        width: "135px",
        height: "244px",
        background: "#000000",
        overflow: "hidden",
        color: "#FFFFFF",
        fontSize: "16px"
      };
      operationNo = {
        color: "#000000",
        fontSize: "42px",
        textAlign: "center",
        fontWeight: "bold",
        width: "74px",
        height: "74px",
        borderRadius: "37px",
        background: "#FAFAFA",
        position: "relative",
        marginBottom: "25px"
      };
    }
    return (
      <div>
        <div className="column container">
          <section className="row">
            <p className="header-1">Operations</p>
          </section>
          <section className="row">
            <section className="column left-aside">
              <div>
                <p className="header-3">Summary</p>
              </div>
              <div className="row justify-content-space-between nowrap">
                {/* Urgent card */}
                <div
                  className="card column justify-content-center align-items-center"
                  style={urgentCard}
                  onChange={this.handleChange}
                >
                  <span className="addmargin">{this.state.textNotice}</span>
                  <span
                    className="row justify-content-center align-items-center"
                    style={operationNo}
                  >
                    {this.state.operationReading}
                    <span className="operation-notification"></span>
                  </span>
                  <span>Operation</span>
                  <span className="small-text">
                    {this.state.operationStatus}
                  </span>
                </div>

                <div className="column">
                  {/* active infusion */}
                  <div className="column card nowrap card-view-small">
                    <span className="row align-items-center justify-content-space-between nowrap">
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
                  <div className="column card nowrap card-view-small">
                    <span className="row align-items-center justify-content-space-between nowrap">
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
              <div className="device-in-use col-5-dash">
                <div className="column nowrap border-bottom">
                  <span className="row align-items-center justify-content-space-between nowrap">
                    <p className="strong text-45 pad-15"> 02 </p>
                    <img
                      className="small-icon pad-15"
                      src={nureseIcon}
                      alt=""
                    />
                  </span>
                  <span className="row nowrap justify-content-space-between">
                    <p className="pad-lr-15"> Device in use </p>
                    <p className="pad-lr-15"> 45 Idle </p>
                  </span>
                </div>
                <div className="column align-items-center">
                  <ol className="device-in-use-ol">
                    <li>
                      <p className="tagname">Tagname</p>
                      <p>Time left</p>
                    </li>
                    <li>
                      <p className="tagname">B5</p>
                      <p>00:13:21</p>
                    </li>
                    <li>
                      <p className="tagname">B5</p>
                      <p>45:01:12</p>
                    </li>
                  </ol>
                  <p className="btn-hollow">see all</p>
                </div>
              </div>
            </section>
            <section className="column col-3">
              <div>
                <p className="header-3">Active Infusion</p>
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
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="column-dash nowrap">
                <div>
                  <p className="header-3-dash">Active Nurses</p>
                </div>
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
    );
  }
}

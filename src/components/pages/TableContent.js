import React, { Component } from "react";
import "../assets/css/tablecontent.css";

export default class TableContent extends Component {
  render() {
    return (
      <div>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Grid from "./workout file/Grid";
export default class Main extends Component {
  render() {
    return (
      <div className="container  p-5">
        <nav className="nav nav-tabs ">
          <a className=" nav-link" href="./Grid">
            Grid
          </a>
          <a className="nav-link" href="./Resume/Navebar.jsx">
            Resume
          </a>
        </nav>
      </div>
    );
  }
}

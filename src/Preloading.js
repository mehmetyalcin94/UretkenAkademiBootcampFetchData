import "./Preloading.css";
import React, { Component } from "react";

class Preloading extends Component {
  render() {
    return (
      <div className="spinner">
        <span>Loading...</span>
        <div className="half-spinner"></div>
      </div>
    );
  }
}

export default Preloading;

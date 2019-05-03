import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          akshat0047 : The Store
          <span className="badge badge-pill badge-secondary">
            {this.props.totalLength}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navbar;

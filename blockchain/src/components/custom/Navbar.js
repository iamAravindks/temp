import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    location: "",
  };

  componentWillReceiveProps() {
    console.log(this.props);
    this.setState({
      location: this.props.history.location.pathname,
    });
  }
  render() {
    if (
      this.state.location === "/" ||
      this.state.location === "/choose" ||
      this.state.location === "/vote" ||
      this.state.location === "/login"
    ) {
      return (
        <nav className="nav-wrapper bg-indigo-500 darken-2">
          <div className="container">
            <a className="brand-logo mx-2 mt-4 text-3xl font-extrabold">
              Votem
            </a>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="nav-wrapper bg-indigo-500 darken-2">
          <div className="container">
            <a className="brand-logo mx-2 mt-4 text-3xl font-extrabold">
              Votem
            </a>
            <ul className="right">
              <li>
                <NavLink to="/">
                  <span className="font-bold">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/newelection">
                  <span className="font-bold">New Election</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/elections">
                  <span className="font-bold">Elections</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);

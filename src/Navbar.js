import React from "react";
import ReactDOM from "react-dom";
import SiteLogo from "./images/logo.png";

export class Navbar extends React.Component {
  handleOnMouseHover(event) {
    event.target.style.color = "#64ffda";
  }

  handleOnMouseLeave(event) {
    event.target.style.color = "#e6f1ff";
  }

  render() {
    const zeroentry = 0;
    const dot = ".";
    const hash = "#";
    const navitems = [
      "About",
      "Technology Stack",
      "Experience",
      "Projects",
      "Contact",
    ];

    const listitems = navitems.map((navitem, index) => (
      <li
        key={index}
        className="nav-item"
        onMouseOver={(e) => this.handleOnMouseHover(e)}
        onMouseLeave={(e) => this.handleOnMouseLeave(e)}
      >
    <a href={hash+navitem}>
        <span className="spanCount">
          {" "}
          {zeroentry.toString() + (index + 1) + dot.toString()}{" "}
        </span>{" "}
      {navitem} </a>
      </li>
    ));

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <br />
        <br />
        <a className="navbar-brand sitelogo" href="#">
          <img
            src={SiteLogo}
            alt="..."
            height="106"
            
         
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{listitems}</ul>
        </div>
      </nav>
    );
  }
}

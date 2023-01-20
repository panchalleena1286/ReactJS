import "./NavbarStyles.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { MainItem } from "./MainItem";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarList">
        <h1 className="navbar-logo">Pretty</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="menu">
          {MainItem.map((item, index) => {
            return (
              <li key={index}>
                <a href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
     
    );
  }
}

export default Navbar;

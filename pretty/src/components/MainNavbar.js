import "./MainNavbarStyle.css";
import { Component } from "react";
import { MainItem } from "./MainItem";

class MainNavbar extends Component {
    render() {
      return (
        <nav className="NavbarList1">
          <ul className="menu">
            {MainItem.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName}
                  href="/">
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
  
  export default MainNavbar;
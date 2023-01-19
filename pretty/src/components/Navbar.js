import "./NavbarStyles.css";
import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavberItems">
                <h1 className="Navbar-logo">Pretty</h1>
                <ul className="nav-menu">
                    <li>
                        <a>
                        <i class="fa-solid fa-bag-shopping"></i>
                        </a>
                    </li>
                    <li>
                        <a>
                        <i class="fa-solid fa-pipe"></i>
                        </a>
                    </li>
                    <li>
                        <a>
                        <i class="fa-solid fa-user"></i>
                        </a>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Navbar;
import React from 'react';
import { NavLink } from "react-router-dom";
import './Style.css';
import  {SocialIcon} from "react-social-icons";

function NavBar() {
    return (
        <header>
            <nav id="navbar">
                <div className="logo">
                    <NavLink className = "logo" to="/" exact >
                        William Mabia 
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink to="/" exact activeClassName="active">
                        Home 
                    </NavLink>
                    <NavLink to="/projects" activeClassName="active">
                        Projects 
                    </NavLink>
                    <NavLink to="/resume" activeClassName="active">
                        Resume 
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active">
                        Contact 
                    </NavLink>
                    <SocialIcon url = "https://github.com/williammabia" target = "_blank"  style = {{height: 25, width: 25}}/>
                    <SocialIcon url = "https://www.linkedin.com/in/william-mabia-25a0b8164/" target = "_blank" style = {{height: 25, width: 25}}/>
                </div>
            </nav>
        </header>
    )
}


export default NavBar

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>  
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/counter">Counter</NavLink></li>
            </ul>

        </>
    )
}

export default Header;
import React from "react";
import '../navbar/Navbar.css'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../svgs/blackLogo.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
           <div className="container">
               <Link to="/" className="logo">
                   <h3><Logo/></h3>
               </Link>

               <ul className="nav-links">
                   <Link to="/categories"><li>Categories</li></Link>
                   <Link to="/business"><li>UTY Business</li></Link>
                   <Link to="/teach"><li>Teach on UTY</li></Link>
                   <Link to="/login"><li>Log in</li></Link>
                   <Link to="/signup"><li>Sign up</li></Link>
               </ul>
           </div>
        </nav>
    );
}

export default Navbar;
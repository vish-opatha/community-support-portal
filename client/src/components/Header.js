import React from 'react';
import Auth from '../utils/auth';
import {NavLink} from "react-router-dom";

const Header = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-wrapper teal darken-4">
          <NavLink to="/" className="brand-logo">
            Relief Support SA
          </NavLink>
          {/* <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i class="material-icons">menu</i>
          </NavLink> */}
          <ul class="right hide-on-med-and-down">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {Auth.loggedIn()? (
              <>
            <li>
                <NavLink to="/agencyservices">My Services</NavLink>
            </li>
            <li>
              <NavLink to="/logout" className="button is-text" id="logoutBtn">Logout</NavLink>
            </li>
            </>
            ) :(
              <>
            <li>
              <NavLink to="/agencysignup">Agency Signup</NavLink>
            </li>
             
            <li>
              <NavLink to="/agencylogin">Agency Login</NavLink>
            </li>
            </>
            )}
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search Items</NavLink>
        </li>
        <li>
          <NavLink to="/userProfile">My Profile</NavLink>
        </li>
        {/* <li>
          <NavLink className="button is-text" id="mobilelogoutBtn">
            Logout
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;

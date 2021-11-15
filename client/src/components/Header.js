import React from 'react';
import Auth from '../utils/auth';

const Header = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-wrapper teal darken-4">
          <a href="/" className="brand-logo">
            Relief Support SA
          </a>
          {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a> */}
          <ul class="right hide-on-med-and-down">
            <li>
                <a href="/">Home</a>
            </li>
            {Auth.loggedIn()? (
              <>
            <li>
                <a href="/agencyservices">My Services</a>
            </li>
            <li>
              <a href="/logout" className="buthrefn is-text" id="logoutBtn" onClick={Auth.logout}>Logout</a>
            </li>
            </>
            ) :(
              <>
            <li>
              <a href="/agencysignup">Agency Signup</a>
            </li>
             
            <li>
              <a href="/agencylogin">Agency Login</a>
            </li>
            </>
            )}
            <li>
              <a href="/search">Search</a>
            </li>
            
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
      <li>
                <a href="/">Home</a>
            </li>
            {Auth.loggedIn()? (
              <>
            <li>
                <a href="/agencyservices">My Services</a>
            </li>
            <li>
              <a href="/logout" className="buthrefn is-text" id="logoutBtn" onClick={Auth.logout}>Logout</a>
            </li>
            </>
            ) :(
              <>
            <li>
              <a href="/agencysignup">Agency Signup</a>
            </li>
             
            <li>
              <a href="/agencylogin">Agency Login</a>
            </li>
            </>
            )}
            <li>
              <a href="/search">Search</a>
            </li>
            
      </ul>
    </>
  );
};

export default Header;

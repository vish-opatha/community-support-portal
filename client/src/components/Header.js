import React from 'react';

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
              <a href="/agencysignup">AgencySignup</a>
            </li>
            <li>
              <a href="/agencylogin">Agency Login</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/logout" className="button is-text" id="logoutBtn">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/search">Search Items</a>
        </li>
        <li>
          <a href="/userProfile">My Profile</a>
        </li>
        {/* <li>
          <a className="button is-text" id="mobilelogoutBtn">
            Logout
          </a>
        </li> */}
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </>
  );
};

export default Header;

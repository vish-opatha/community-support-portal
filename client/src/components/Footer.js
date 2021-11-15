import React from 'react';

const Footer = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" teal darken-4 page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About</h5>
              <p className="grey-text text-lighten-4" >
                <span>Relief Support SA </span>is a project which is purely
                inteded to support the South Australian community who are
                expecting to receive different types of community support
                services.
              </p>
              <a
                className="grey-text text-lighten-4 left"
                href="https://github.com/vish-opatha/community-support-portal"
                style={{marginTop:10}}
              >
                Find the source code
              </a>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Connect with the developers</h5>
              <ul>
                <li >
                  <a
                    className="grey-text text-lighten-3"
                    href="https://github.com/vish-opatha"
                  >
                    vish-opatha
                  </a>
                </li>
        
                <li style={{marginTop:10}}>
                  <p>The information about the services in this site are registered services by different agencies and the availability of services and details could be changed at at any time.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">Copyright © 2021 by Relief Support SA</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

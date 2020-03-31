import React, { FunctionComponent } from 'react';
import SpecialLink from './SpecialLink';
import linkedInLogo from '../images/linkedInLogo.png';
import gitHubLogo from '../images/gitHubLogo.png';
//import emailLogo from '../images/emailLogo.png';

const Navbar: FunctionComponent = () => (
  <div className="navbar-wrapper">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <SpecialLink className="navbar-brand nav-link" href="/about">
        Eleni Zoumpoulaki
      </SpecialLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className="navbar-links">
            <SpecialLink className="nav-item nav-link" href="/about">
              About
            </SpecialLink>
            <SpecialLink className="nav-item nav-link" href="/education">
              Academic & Professional Background
            </SpecialLink>
            <SpecialLink className="nav-item nav-link" href="/projects">
              Projects
            </SpecialLink>
          </div>

          <div className="navbar-img">
            <SpecialLink
              className="nav-item nav-link"
              href="www.linkedin.com/in/elenizoump"
            >
              <img src={linkedInLogo} alt="linkedIn Logo" />
            </SpecialLink>
            <SpecialLink
              className="nav-item nav-link"
              href="https://github.com/elenizoump"
            >
              <img src={gitHubLogo} alt="github Logo" />
            </SpecialLink>
            {/* <SpecialLink
              className="nav-item nav-link"
              href="mailto:elenizoump@hotmail.com"
            >
              <img src={emailLogo} alt="email Logo" />
            </SpecialLink> */}
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;

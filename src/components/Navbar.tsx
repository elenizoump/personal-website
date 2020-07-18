import React, { FunctionComponent } from 'react';
import SpecialLink from './SpecialLink';
import linkedInLogo from '../images/linkedInLogo.png';
import gitHubLogo from '../images/gitHubLogo.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import emailLogo from '../images/emailLogo.png';

const NavbarComponent: FunctionComponent = () => (
  <div className="navbar-wrapper">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <SpecialLink className="navbar-brand nav-link" href="/about">
        Eleni Zoumpoulaki
      </SpecialLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className="navbar-links">
            <SpecialLink className="nav-item nav-link --mainlink" href="/about">
              About
            </SpecialLink>
            <SpecialLink
              className="nav-item nav-link --mainlink"
              href="/education"
            >
              Academic & Professional Background
            </SpecialLink>
            <SpecialLink className="nav-item nav-link" href="/projects">
              Projects
            </SpecialLink>
          </div>

          <div className="navbar-img">
            <SpecialLink
              className="nav-item nav-link"
              href="https://www.linkedin.com/in/elenizoump/"
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarComponent;

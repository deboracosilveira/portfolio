import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Dropdown } from 'react-bootstrap';

import { useMediaQuery } from 'react-responsive';

import './Header.css';

const Header = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 800px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width: 800px)',
  });

  const createLink = (path, label) => (
    <Link to={`/${path}`} className="link">
      {label}
    </Link>
  );

  const createNavForDesktop = () => (
    <nav>
      {createLink('about-me', 'ABOUT ME')}
      {/* {createLink('#projects', 'PROJECTS')} */}
      <HashLink to="/#projects" className="link">
        PROJECTS
      </HashLink>
      <h1 className="name-title">DÉBORA SILVEIRA</h1>
      {createLink('CV', 'CV')}
      <HashLink to="/#footer" className="link">
        CONTACT
      </HashLink>
    </nav>
  );

  const createNavForMobileAndTablet = () => (
    <nav>
      <h1 className="name-title">DÉBORA SILVEIRA</h1>
      <Dropdown>
        <Dropdown.Toggle variant="Secondary" className="dropdown-toggle"></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/about-me" className="dropdown-item">
            ABOUT ME
          </Dropdown.Item>
          <Dropdown.Item href="/#projects" className="dropdown-item">
            PROJECTS
          </Dropdown.Item>
          <Dropdown.Item href="/CV" className="dropdown-item">
            CV
          </Dropdown.Item>
          <Dropdown.Item href="/#footer" className="dropdown-item">
            CONTACT
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );

  return (
    <header>
      {isDesktop && createNavForDesktop()}
      {isMobileOrTablet && createNavForMobileAndTablet()}
    </header>
  );
};

export default Header;

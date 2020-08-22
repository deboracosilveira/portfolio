import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import { Dropdown } from 'react-bootstrap';

import { useMediaQuery } from 'react-responsive';

import './Header.css';
import HeaderContainer from './styles';

const Header = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 800px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width: 800px)',
  });

  // const createLink = (path, label) => (
  //   <HeaderContainer.Link to={`/${path}`}>{label}</HeaderContainer.Link>
  // );

  const createNavForDesktop = () => (
    <HeaderContainer.Nav>
      {/* {createLink('about-me', 'ABOUT ME')} */}
      <HeaderContainer.HashLink to="/#projects">PROJECTS</HeaderContainer.HashLink>
      <HeaderContainer.Name>DÉBORA SILVEIRA</HeaderContainer.Name>
      {/* {createLink('CV', 'CV')} */}
      <HeaderContainer.HashLink to="/#footer">CONTACT</HeaderContainer.HashLink>
    </HeaderContainer.Nav>
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
    <HeaderContainer>
      {isDesktop && createNavForDesktop()}
      {isMobileOrTablet && createNavForMobileAndTablet()}
    </HeaderContainer>
  );
};

export default Header;

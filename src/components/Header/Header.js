import React from 'react';
// import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderContainer from './styles';

const Header = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 800px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });

  // const createLink = (path, label) => (
  //   <HeaderContainer.Link to={`/${path}`}>{label}</HeaderContainer.Link>
  // );

  const createNavForDesktop = () => (
    <React.Fragment>
      {/* {createLink('about-me', 'ABOUT ME')} */}
      <HeaderContainer.HashLink to="/#projects">PROJECTS</HeaderContainer.HashLink>
      <HeaderContainer.Name>DÉBORA SILVEIRA</HeaderContainer.Name>
      {/* {createLink('CV', 'CV')} */}
      <HeaderContainer.HashLink to="/#footer">CONTACT</HeaderContainer.HashLink>
    </React.Fragment>
  );

  const createNavForMobileAndTablet = () => (
    <React.Fragment>
      <HeaderContainer.Name>DÉBORA SILVEIRA</HeaderContainer.Name>
      <HeaderContainer.Dropdown>
        <HeaderContainer.Dropdown.Toggle variant="Secondary"></HeaderContainer.Dropdown.Toggle>
        <HeaderContainer.Dropdown.Menu>
          <HeaderContainer.Dropdown.Item href="/#projects">PROJECTS</HeaderContainer.Dropdown.Item>
          <HeaderContainer.Dropdown.Item href="/#footer">CONTACT</HeaderContainer.Dropdown.Item>
        </HeaderContainer.Dropdown.Menu>
      </HeaderContainer.Dropdown>
    </React.Fragment>
  );

  return (
    <HeaderContainer>
      <HeaderContainer.Nav>
        {isDesktop && createNavForDesktop()}
        {isMobileOrTablet && createNavForMobileAndTablet()}
      </HeaderContainer.Nav>
    </HeaderContainer>
  );
};

export default Header;

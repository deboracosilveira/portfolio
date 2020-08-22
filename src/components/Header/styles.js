import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const HeaderContainer = styled.header`
  padding: 20px 80px;

  @media (max-width: 800px) {
    padding: 20px 50px;
  }
`;

HeaderContainer.Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

HeaderContainer.Link = styled(Link)`
  color: var(--grayHeavy);
  font-size: 1.8vw;
  font-weight: 300;
  margin: 10px;
  text-align: center;
  white-space: nowrap;
  width: 7.5vw;

  &:hover {
    color: black;
    opacity: 0.3;
    text-decoration: none;
  }
`;

HeaderContainer.HashLink = styled(HashLink)`
  color: var(--grayHeavy);
  font-size: 1.8vw;
  font-weight: 300;
  margin: 10px;
  text-align: center;
  white-space: nowrap;
  width: 7.5vw;

  &:hover {
    color: black;
    opacity: 0.3;
    text-decoration: none;
  }
`;

HeaderContainer.Name = styled.h1`
  color: var(--grayHeavy);
  font-size: 3.5vw;
  font-weight: normal;
  margin: 10px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

HeaderContainer.Dropdown = styled(Dropdown)``;

HeaderContainer.Dropdown.Toggle = styled(Dropdown.Toggle)`
  color: var(--grayHeavy);
  font-size: 35px;

  &:focus {
    box-shadow: none;
  }
`;

HeaderContainer.Dropdown.Item = styled(Dropdown.Item)`
  font-size: 20px;

  &:active, 
  :hover {
    background-color: var(--grayMedium);
    color: var(--grayHeavy);
  }  
`;

export default HeaderContainer;

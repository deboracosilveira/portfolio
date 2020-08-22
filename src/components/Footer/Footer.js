import React from 'react';
import { FooterContainer } from './styles';
import linkedin from '../../assets/img/linkedin.svg';
import github from '../../assets/img/github.svg';
import email from '../../assets/img/email.svg';

const createLink = (url, icon) => (
  <FooterContainer.Link target="_blank" href={url}>
    <FooterContainer.Icon src={icon} alt={icon} />
  </FooterContainer.Link>
);

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterContainer.Title>talk to me</FooterContainer.Title>
      <FooterContainer.Links>
        {createLink('https://www.linkedin.com/in/deboracosilveira/', linkedin)}
        {createLink('https://github.com/deboracosilveira', github)}
        {createLink('mailto:deboracosilveira@gmail.com', email)}
      </FooterContainer.Links>
      <FooterContainer.Copyrigth>Copyrigth © 2020 Débora Silveira</FooterContainer.Copyrigth>
    </FooterContainer>
  );
};

export default Footer;

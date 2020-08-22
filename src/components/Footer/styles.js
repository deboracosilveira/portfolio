import styled from 'styled-components';

export const FooterContainer = styled.footer`
  align-items: center;
  background-color: var(--grayHeavy);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  width: 100%;
`;

FooterContainer.Title = styled.p`
  bottom: -5%;
  color: var(--white);
  font-size: 4.5vw;
  font-weight: 300;
  left: -36%;
  position: relative;

  @media (max-width: 800px) {
    font-size: 6vw;
  }
`;

FooterContainer.Links = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
  width: 40%;

  @media (max-width: 800px) {
    width: 65%;
  }
`;

FooterContainer.Link = styled.a``;

FooterContainer.Icon = styled.img`
  width: 60px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 40px;
  }
`;

FooterContainer.Copyrigth = styled.p`
  font-size: 1.5vw;
  font-weight: 300;
  margin-bottom: 2%;

  @media (max-width: 800px) {
    font-size: 3.5vw;
  }
`;

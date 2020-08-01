import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--grayHeavy);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--white);
  width: 100%;
  margin: 0;
`;

FooterContainer.Title = styled.p`
  color: var(--white);
  font-size: 4.5vw;
  font-weight: 300;
  position: relative;
  left: -36%;
  bottom: -5%;

  @media (max-width: 800px) {
    font-size: 6vw;
  }
`;

FooterContainer.Links = styled.section`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;

  @media (max-width: 800px) {
    width: 65%;
  }
`;

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

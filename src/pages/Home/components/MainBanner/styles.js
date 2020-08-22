import styled from 'styled-components';
import { BackgroundBox, Button } from '../../../../components';

export const MainBannerContainer = styled.section`
  display: flex;
  margin: 2% 0;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MainBannerImage = styled.img`
  left: 14%;
  position: relative;
  top: 14%;
  width: 100%;
`;

export const WelcomeBox = styled(BackgroundBox)`
  height: 35vw;
  left: 15%;
  margin: 5%;
  width: 37vw;

  @media (max-width: 800px) {
    height: 86vw;
    margin-bottom: 5%;
  }
`;

WelcomeBox.Title = styled.p`
  color: var(--grayHeavy);
  font-size: 3.5vw;
  font-weight: 700;
  left: 5%;
  letter-spacing: 9px;
  position: absolute;
  top: -8%;

  @media (max-width: 800px) {
    font-size: 8vw;
  }
`;

WelcomeBox.Text = styled.p`
  font-size: 1.7vw;
  margin: 5%;
  padding: 2%;
  position: relative;
  text-align: justify;
  top: 10%;

  @media (max-width: 800px) {
    font-size: 4vw;
    top: 5%;
  }
`;

WelcomeBox.Button = styled(Button)`
  bottom: -5%;
  left: 50%;
  position: absolute;
`;
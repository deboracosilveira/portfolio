import styled from 'styled-components';
import { BackgroundBox, Button } from '../../../../components';

export const TechBannerContainer = styled.section`
  display: flex;
  margin: 2% 0;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TechBox = styled(BackgroundBox)`
  height: 35vw;
  left: 5%;
  margin: 5%;
  width: 37vw;

  @media (max-width: 800px) {
    height: 86vw;
    margin-bottom: 5%;
  }
`;

TechBox.Title = styled.p`
  color: var(--grayHeavy);
  font-size: 3.5vw;
  font-weight: 700;
  left: 60%;
  letter-spacing: 9px;
  position: absolute;
  top: -8%;

  @media (max-width: 800px) {
    font-size: 8vw;
  }
`;

TechBox.Text = styled.p`
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

TechBox.Button = styled(Button)`
  bottom: -5%;
  left: 15%;
  position: absolute;
`;

export const TechBannerBackgroundBox = styled.div`
  background-color: var(--grayMedium);
  height: 35vw;
  left: 15%;
  position: relative;
  width: 35vw;

  @media (max-width: 800px) {
    height: 70vw;
    left: 20%;
    margin: 10% 0;
    width: 70vw;
  }
`;

export const TechBannerImage = styled.img`
  position: relative;
  right: 14%;
  top: 14%;
  width: 100%;
`;

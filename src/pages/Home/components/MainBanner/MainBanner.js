import React from 'react';
import { MainBannerContainer, MainBannerImage, WelcomeBox } from './styles';
import { BackgroundBox } from '../../../../components';
import MyImage from '../../../../../assets/img/deboraSilveira.jpg';

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <BackgroundBox>
        <MainBannerImage src={MyImage} />
      </BackgroundBox>
      <WelcomeBox>
        <WelcomeBox.Title>WELCOME</WelcomeBox.Title>
        <WelcomeBox.Text>
          I'm Débora, a newcomer to the world of coding! The power that technology has to transform
          people's lives was one of the main reasons that made me choose it. In 2020 I found Trybe,
          a school of the future that is leveraging my knowledge in this area and training me with
          the most sought skills by the market. I'm passionate about photography, gastronomy, and
          technology!
        </WelcomeBox.Text>
        <WelcomeBox.Button>read more...</WelcomeBox.Button>
      </WelcomeBox>
    </MainBannerContainer>
  );
};

export default MainBanner;

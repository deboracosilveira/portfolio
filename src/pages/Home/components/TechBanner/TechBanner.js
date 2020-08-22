import React from 'react';
import { TechBannerContainer, TechBannerImage, TechBox, TechBannerBackgroundBox } from './styles';
import TechImage from '../../../../../assets/img/larisa-birta-unsplash.jpg';

const MainBanner = () => {
  return (
    <TechBannerContainer>
      <TechBox>
        <TechBox.Title>TECH</TechBox.Title>
        <TechBox.Text>
          I'm Débora, a newcomer to the world of coding! The power that technology has to transform
          people's lives was one of the main reasons that made me choose it. In 2020 I found Trybe,
          a school of the future that is leveraging my knowledge in this area and training me with
          the most sought skills by the market.
        </TechBox.Text>
        <TechBox.Button>read more...</TechBox.Button>
      </TechBox>
      <TechBannerBackgroundBox>
        <TechBannerImage src={TechImage} />
      </TechBannerBackgroundBox>
    </TechBannerContainer>
  );
};

export default MainBanner;

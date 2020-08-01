import styled from 'styled-components';
import backgroundCurve from '../../../../../assets/img/background-curve.svg';

export const QuoteContainer = styled.div`
  background-image: url(${backgroundCurve});
  background-position: center;
  background-size: cover;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  @media (max-width: 800px) {
    height: 27vw;
    margin-bottom: 3%;
  }
`;

QuoteContainer.Text = styled.p`
  color: var(grayHeavy);
  text-align: center;
  font-size: 2.3vw;
  font-weight: 600;
  letter-spacing: 4px;
  width: 80%;

  @media (max-width: 800px) {
    font-size: 3vw;
    width: 90%;
    letter-spacing: 2px;
  }
`;

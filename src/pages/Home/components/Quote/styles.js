import styled from 'styled-components';
import backgroundCurve from '../../../../../assets/img/background-curve.svg';

export const QuoteContainer = styled.div`
  align-items: center;
  background-image: url(${backgroundCurve});
  background-position: center;
  background-size: cover;
  display: flex;
  height: 20vw;
  justify-content: center;
  margin-bottom: 5%;

  @media (max-width: 800px) {
    height: 27vw;
    margin-bottom: 3%;
  }
`;

QuoteContainer.Text = styled.p`
  color: var(grayHeavy);
  font-size: 2.3vw;
  font-weight: 600;
  letter-spacing: 4px;
  text-align: center;
  width: 80%;

  @media (max-width: 800px) {
    font-size: 3vw;
    letter-spacing: 2px;
    width: 90%;
  }
`;

import styled from 'styled-components';

export const BackgroundBox = styled.div`
  background-color: var(--grayMedium);
  height: 35vw;
  left: 5%;
  position: relative;
  width: 35vw;

  @media (max-width: 800px) {
    height: 70vw;
    left: 10%;
    margin-bottom: 20%;
    width: 70vw;
  }
`;

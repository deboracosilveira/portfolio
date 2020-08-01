import styled from 'styled-components';

export const BackgroundBox = styled.div`
  background-color: var(--grayMedium);
  width: 35vw;
  height: 35vw;
  position: relative;
  left: 5%;

  @media (max-width: 800px) {
    left: 10%;
    width: 70vw;
    height: 70vw;
    margin-bottom: 20%;
  }
`;

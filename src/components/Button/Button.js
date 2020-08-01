import styled from 'styled-components';

export const Button = styled.button`
  width: 12vw;
  text-align: center;
  background-color: var(--grayHeavy);
  color: var(--white);
  cursor: pointer;
  padding: 3%;
  font-weight: 300;
  font-size: 1.5vw;
  border-radius: 5px;
  border-style: none;
  letter-spacing: 2px;
  text-decoration: none;
  /* display: inline-block; */
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 30vw;
    font-size: 4vw;
  }
`;
import styled from 'styled-components';

const Button = styled.button`
  /* display: inline-block; */
  background-color: var(--grayHeavy);
  border-radius: 5px;
  border-style: none;
  color: var(--white);
  cursor: pointer;
  font-size: 1.5vw;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 3%;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.3s;
  width: 12vw;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    font-size: 4vw;
    width: 30vw;
  }
`;

export default Button;

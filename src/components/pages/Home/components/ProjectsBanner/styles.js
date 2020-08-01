import styled from 'styled-components';
import { Button } from '../../../../Button/Button';

export const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 15%;

  height: 45vw;

  @media (max-width: 800px) {
    margin-bottom: 30%;
    height: 250vw;
  }
`;

ProjectsContainer.Title = styled.p`
  color: var(--grayHeavy);
  font-size: 3.5vw;
  font-weight: 700;
  text-align: center;
  letter-spacing: 6px;
  margin-bottom: 5%;

  @media (max-width: 800px) {
    margin: 10% 0;
    font-size: 6vw;
  }
`;

ProjectsContainer.LeftBox = styled.div`
  background-color: var(--grayMedium);
  padding: 3% 0;
  width: 45%;

  @media (max-width: 800px) {
    align-self: center;
    height: 100%;
    width: 90%;
    padding: -40%;
  }
`;

ProjectsContainer.RightBox = styled(ProjectsContainer.LeftBox)`
  background-color: var(--white);

  @media (max-width: 800px) {
    display: none;
  }
`;

ProjectsContainer.Items = styled.div`
  display: flex;
  position: relative;
  width: 200%;
  height: 100%;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: var(--grayMedium);
    flex-direction: column;
    padding: 20px;
  }
`;

ProjectsContainer.Item1 = styled.img`
  border: 5px solid var(--grayMedium);
  height: 60%;

  @media (max-width: 800px) {
    border: 5px solid var(--white);
    height: 30%;
    justify-self: center;
    align-self: center;
  }
`;

ProjectsContainer.Item2 = styled(ProjectsContainer.Item1)`
  left: 40%;
  align-self: center;

  @media (max-width: 800px) {
    align-self: center;
    justify-self: center;
  }
`;

ProjectsContainer.Item3 = styled(ProjectsContainer.Item1)`
  left: 70%;
  align-self: flex-end;

  @media (max-width: 800px) {
    align-self: center;
    justify-self: center;
  }
`;

ProjectsContainer.Button = styled(Button)`
  position: relative;
  left: 15%;
`;

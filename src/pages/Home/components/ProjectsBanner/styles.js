import styled from 'styled-components';
import { Button } from '../../../../components';

export const ProjectsContainer = styled.section`
  display: flex;
  height: 45vw;
  justify-content: center;
  margin-bottom: 15%;

  @media (max-width: 800px) {
    height: 250vw;
    margin-bottom: 30%;
  }
`;

ProjectsContainer.Title = styled.p`
  color: var(--grayHeavy);
  font-size: 3.5vw;
  font-weight: 700;
  letter-spacing: 6px;
  margin-bottom: 5%;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 6vw;
    margin: 10% 0;
  }
`;

ProjectsContainer.LeftBox = styled.div`
  background-color: var(--grayMedium);
  padding: 3% 0;
  width: 45%;

  @media (max-width: 800px) {
    align-self: center;
    height: 100%;
    padding: -40%;
    width: 90%;
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
  height: 100%;
  justify-content: space-around;
  position: relative;
  width: 200%;

  @media (max-width: 800px) {
    background-color: var(--grayMedium);
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    width: 100%;
  }
`;

ProjectsContainer.Item1 = styled.img`
  border: 5px solid var(--grayMedium);
  height: 60%;

  @media (max-width: 800px) {
    align-self: center;
    border: 5px solid var(--white);
    height: 30%;
    justify-self: center;
  }
`;

ProjectsContainer.Item2 = styled(ProjectsContainer.Item1)`
  align-self: center;
  left: 40%;

  @media (max-width: 800px) {
    align-self: center;
    justify-self: center;
  }
`;

ProjectsContainer.Item3 = styled(ProjectsContainer.Item1)`
  align-self: flex-end;
  left: 70%;

  @media (max-width: 800px) {
    align-self: center;
    justify-self: center;
  }
`;

ProjectsContainer.Button = styled(Button)`
  left: 15%;
  position: relative;
`;

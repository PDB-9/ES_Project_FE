import styled from "styled-components";

export const StyledLandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom right, #000428, #004e92);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  h1 {
    color: #98ff98;
    font-size: 5rem;
    margin: 0rem;
  }

  p {
    margin-bottom: 3rem;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const FieldWrapper = styled.div`
  width: 50vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Circle1 = styled.div`
  background-color: #98ff98;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  position: fixed;
  top: -100px;
  right: -100px;
`;

export const Circle2 = styled.div`
  background-color: #98ff98;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  position: fixed;
  bottom: -170px;
  left: 360px;
`;

export const Circle3 = styled.div`
  background-image: linear-gradient(to right, #98ff98, 40%, rgba(255, 0, 0, 0));
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  position: fixed;
  top: 150px;
  left: 150px;
`;

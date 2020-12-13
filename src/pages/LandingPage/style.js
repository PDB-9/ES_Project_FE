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
    margin-top: 0rem;
    margin-bottom: 2rem;
  }
`;

export const FieldWrapper = styled.div`
  width: 50vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

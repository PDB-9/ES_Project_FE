import styled from "styled-components";

export const StyledButton = styled.button`
  border: 0px;
  border-radius: 100px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #98ff98;
  color: #000000;
  padding-left: 1rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: #98ff98;
    background-color: #000000;
  }
`;

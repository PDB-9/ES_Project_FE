import styled from "styled-components";

export const StyledTopSearchCard = styled.div`
  padding: 1rem 2.5rem 2rem 2.5rem;
  margin-top: 1rem;
  background-color: #badfff;
  border-radius: 28px;

  .empty {
    text-align: center;
  }
`;

export const TopSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 0;
  }

  .title {
    font-weight: bold;
  }
`;

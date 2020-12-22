import styled from "styled-components";

export const StyledCard = styled.div`
  width: 45rem;
  padding: 2.5rem;
  background-color: #ffffff;
  border-radius: 28px;
  margin-bottom: 2rem;

  .title {
    font-weight: bold;
    margin: 0;
    color: #000000;
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .artist {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .by {
    color: gray;
  }

  .date {
    margin-top: 1rem;
    text-align: right;
  }
`;

export const TitleTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  margin-bottom: 2rem;
`;

export const ChipWrapper = styled.div`
  border: 1px solid ${({ color }) => (color ? color : "black")};
  color: ${({ color }) => (color ? color : "black")};
  border-radius: 4px;
  padding: 2px 4px;
  margin-left: 0.45rem;
  margin-right: 0.45rem;
`;

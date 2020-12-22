import styled from "styled-components";

export const StyledPlaylistCard = styled.div`
  padding: 1rem 2.5rem 2.5rem 2.5rem;
  background-color: #badfff;
  border-radius: 28px;
  margin-top: 1rem;

  h1 {
    margin-bottom: 0;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0;
  }

  .artists {
    margin-top: 0;
    margin-bottom: 0.2rem;
  }

  .delete {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }

  .empty {
    text-align: center;

    h3 {
      margin-bottom: 0.4rem;
    }

    p {
      margin: 0;
    }
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

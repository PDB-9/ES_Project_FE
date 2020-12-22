import styled from "styled-components";

export const StyledMusicPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #000428, #004e92);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 3rem;

  h1 {
    margin-top: 0rem;
    color: #ffffff;
  }

  .brand {
    width: 6rem;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #98ff98;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 3rem;
  padding-bottom: 3rem;
  z-index: 1;

  .no-results {
    color: #ffffff;
    font-weight: bold;
  }
`;

export const SearchWrapper = styled.div`
  width: 53rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const TopFieldWrapper = styled.div`
  width: 50rem;
  height: 3.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const BottomFieldWrapper = styled.div`
  width: 50rem;
  height: 3.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const PlaylistWrapper = styled.div`
  width: 30rem;
  z-index: 1;
`;

export const GenreWrapper = styled.div`
  padding: 1rem 2.5rem 2.5rem 2.5rem;
  background-color: #badfff;
  border-radius: 28px;

  h1 {
    margin-bottom: 0.2rem;
  }
`;

export const PaginationWrapper = styled.div`
  width: 50rem;
  display: flex;
  justify-content: center;
`;

export const Circle = styled.div`
  background-image: linear-gradient(to right, #98ff98, 40%, rgba(255, 0, 0, 0));
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  position: fixed;
  top: -100px;
  right: -100px;
`;

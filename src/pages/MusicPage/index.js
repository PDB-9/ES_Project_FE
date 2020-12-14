import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import { Field, Button, Card } from "../../components/index";
import { getNewValidation, handleActionSearch } from "../LandingPage/utils";
import { fetchMusic } from "./utils";
import { StyledMusicPage, ResultWrapper, SearchWrapper, PaginationWrapper, Circle } from "./style";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#ffffff",
    },

    "& .Mui-selected": {
      backgroundColor: "#98ff98",
      color: "#000000",
      "&:hover": {
        backgroundColor: "#000000",
        color: "#ffffff",
      },
    },
  },
}));

const MusicPage = ({ search }) => {
  const [searchData, setSearchData] = useState({});
  const [page, setPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0);
  const [newSearch, setNewSearch] = useState("");
  const [validation, setValidation] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    async function getSearchResult() {
      const data = await fetchMusic(search, pageOffset, dispatch);
      const replacedSearch = search.replace("%25", " ");

      setSearchData(data);
      setNewSearch(replacedSearch);
    }
    getSearchResult();
  }, [dispatch, search, pageOffset]);

  const handlePageChange = (event, value) => {
    const newPageOffset = value * 10 - 10;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setPage(value);
    setPageOffset(newPageOffset);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setNewSearch(value);
  };

  const handleSearch = () => {
    const newValidation = getNewValidation(newSearch);
    if (!newValidation) {
      handleActionSearch(newSearch);
    }

    setValidation(newValidation);
    setPage(1);
    setPageOffset(0);
  };

  return (
    <StyledMusicPage>
      <ResultWrapper>
        <div className="brand" onClick={() => navigate(`/`)}>
          Spoti.py
        </div>
        <h1>Search Results</h1>
        <SearchWrapper>
          <Field
            label="Title / Artist / Year"
            value={newSearch}
            onChange={(e) => handleChange(e)}
            error={!!validation}
            size="small"
          />
          <Button onClick={handleSearch}>
            <SearchIcon style={{ marginRight: "0.2rem", fontSize: "2rem" }} />
            Search
          </Button>
        </SearchWrapper>
        {searchData.results ? (
          searchData.results.map((el, idx) => {
            return (
              <Card
                key={idx}
                id={el.id}
                title={el.name}
                artists={el.artists.join(", ")}
                year={el.year}
                duration={el.duration_ms}
                explicit={el.duration}
              />
            );
          })
        ) : (
          <p className="no-results">No Results found</p>
        )}
        <PaginationWrapper>
          <Pagination
            count={Math.ceil(searchData.count / 10)}
            page={page}
            onChange={handlePageChange}
            classes={{ ul: classes.ul }}
          />
        </PaginationWrapper>
      </ResultWrapper>
      <Circle />
    </StyledMusicPage>
  );
};

export default MusicPage;

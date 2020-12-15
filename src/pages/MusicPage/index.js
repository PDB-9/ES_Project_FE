import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import { Field, Button, Card, Dropdown } from "../../components/index";
import { getNewValidation, handleActionSearch } from "../LandingPage/utils";
import { fetchMusic } from "./utils";
import { StyledMusicPage, ResultWrapper, SearchWrapper, PaginationWrapper, Circle } from "./style";

const initialSeachData = {
  count: 0,
  next: null,
  previous: null,
  facets: {},
  results: [],
};

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

const MusicPage = ({ search, filter }) => {
  const [searchData, setSearchData] = useState(initialSeachData);
  const [page, setPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0);
  const [newSearch, setNewSearch] = useState("");
  const [newFilter, setNewFilter] = useState(filter);
  const [validation, setValidation] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    async function getSearchResult() {
      const data = await fetchMusic(search, filter, pageOffset, dispatch);
      const replacedSearch = search.replace(/%25/g, " ");

      setSearchData(data);
      setNewSearch(replacedSearch);
    }
    getSearchResult();
  }, [dispatch, search, filter, pageOffset]);

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

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleSearch = () => {
    const newValidation = getNewValidation(newSearch);
    if (!newValidation) {
      handleActionSearch(newSearch, newFilter);
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
          <Dropdown filter={newFilter} handleChange={handleFilterChange} />
          <Button onClick={handleSearch}>
            <SearchIcon style={{ marginRight: "0.2rem", fontSize: "2rem" }} />
            Search
          </Button>
        </SearchWrapper>
        {searchData.results.length ? (
          searchData.results.map((el, idx) => {
            return (
              <Card
                key={idx}
                id={el.id}
                title={el.name}
                artists={el.artists.join(", ")}
                year={el.year}
                duration={el.duration_ms}
                explicit={el.explicit}
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

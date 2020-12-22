import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import { Field, Button, Card, Dropdown, PlaylistCard, TopSearch } from "../../components/index";
import { getNewValidation, handleActionSearch } from "../LandingPage/utils";
import { fetchMusic, fetchTopSearch } from "./utils";
import {
  StyledMusicPage,
  TitleWrapper,
  ResultWrapper,
  SearchWrapper,
  TopFieldWrapper,
  BottomFieldWrapper,
  PlaylistWrapper,
  GenreWrapper,
  PaginationWrapper,
  Circle,
} from "./style";

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

const MusicPage = ({ search, filter, explicit = "", yearFrom = "", yearTo = "" }) => {
  const [searchData, setSearchData] = useState(initialSeachData);
  const [page, setPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0);
  const [newSearch, setNewSearch] = useState("");
  const [newFilter, setNewFilter] = useState(filter);
  const [newYearFrom, setNewYearFrom] = useState("");
  const [newYearTo, setNewYearTo] = useState("");
  const [newExplicit, setNewExplicit] = useState("all");
  const [validation, setValidation] = useState("");
  const [yearFromValid, setYearFromValid] = useState("");
  const [yearToValid, setYearToValid] = useState("");
  const [topSearchData, setTopSearchData] = useState([]);
  const [acoustic, setAcoustic] = useState(false);
  const [danceable, setDanceable] = useState(false);
  const [energetic, setEnergetic] = useState(false);
  const [instrumental, setInstrumental] = useState(false);
  const [happy, setHappy] = useState(false);
  const [sad, setSad] = useState(false);
  const [live, setLive] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const getSearchResult = async () => {
      const data = await fetchMusic(
        search,
        filter,
        pageOffset,
        explicit,
        yearFrom,
        yearTo,
        acoustic,
        danceable,
        energetic,
        instrumental,
        happy,
        sad,
        live,
        dispatch
      );
      const replacedSearch = search.replace(/%25/g, " ");

      setSearchData(data);
      setNewSearch(replacedSearch);
    };

    const getTopSearchResult = async () => {
      const data = await fetchTopSearch();

      setTopSearchData(data);
    };

    getSearchResult();
    getTopSearchResult();
  }, [
    dispatch,
    search,
    filter,
    explicit,
    yearFrom,
    yearTo,
    pageOffset,
    acoustic,
    danceable,
    energetic,
    instrumental,
    happy,
    sad,
    live,
  ]);

  const handlePageChange = (event, value) => {
    const newPageOffset = value * 10 - 10;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setPage(value);
    setPageOffset(newPageOffset);
  };

  const handleChange = (e, label) => {
    const value = e.target.value;

    if (label.includes("Title / Artist")) {
      setNewSearch(value);
    } else if (label.includes("Year From")) {
      setNewYearFrom(value);
    } else {
      setNewYearTo(value);
    }
  };

  const handleFilterChange = (event, label) => {
    if (label.includes("Filter")) {
      setNewFilter(event.target.value);
    } else {
      setNewExplicit(event.target.value);
    }
  };

  const handleCheckboxChange = (event, label) => {
    if (label.includes("Acoustic")) {
      setAcoustic(event.target.checked);
    } else if (label.includes("Danceable")) {
      setDanceable(event.target.checked);
    } else if (label.includes("Energetic")) {
      setEnergetic(event.target.checked);
    } else if (label.includes("Instrumental")) {
      setInstrumental(event.target.checked);
    } else if (label.includes("Happy")) {
      setHappy(event.target.checked);
    } else if (label.includes("Sad")) {
      setSad(event.target.checked);
    } else {
      setLive(event.target.checked);
    }
  };

  const handleSearch = () => {
    let newYearValidation;
    const newValidation = getNewValidation(newSearch);
    if (newYearFrom || newYearTo) {
      newYearValidation = getNewValidation(newYearFrom) || getNewValidation(newYearTo);
    }
    if (!newValidation && !newYearValidation) {
      handleActionSearch(newSearch, newFilter, newExplicit, newYearFrom, newYearTo);
    }

    setValidation(newValidation);
    setYearFromValid(newYearValidation);
    setYearToValid(newYearValidation);
    setPage(1);
    setPageOffset(0);
  };

  return (
    <StyledMusicPage>
      <TitleWrapper>
        <div className="brand" onClick={() => navigate(`/`)}>
          Spoti.py
        </div>
        <h1>Search Results</h1>
      </TitleWrapper>
      <ResultWrapper>
        <SearchWrapper>
          <TopFieldWrapper>
            <Field
              label="Title / Artist"
              value={newSearch}
              onChange={(e) => handleChange(e, "Title / Artist")}
              error={!!validation}
              size="small"
              style={{ marginRight: "0.7rem" }}
            />
            <Field
              label="Year From"
              value={newYearFrom}
              onChange={(e) => handleChange(e, "Year From")}
              error={!!yearFromValid}
              size="small"
              style={{ width: "30%", marginRight: "0.7rem" }}
            />
            <Field
              label="Year To"
              value={newYearTo}
              onChange={(e) => handleChange(e, "Year To")}
              error={!!yearToValid}
              size="small"
              style={{ width: "30%" }}
            />
          </TopFieldWrapper>
          <BottomFieldWrapper>
            <Dropdown
              label="Filter"
              filter={newFilter}
              handleChange={(e) => handleFilterChange(e, "Filter")}
              style={{ marginRight: "0.7rem" }}
            />
            <Dropdown
              label="Explicit"
              filter={newExplicit}
              handleChange={(e) => handleFilterChange(e, "Explicit")}
              style={{ marginRight: "0.7rem" }}
            />
            <Button onClick={handleSearch} style={{ height: "100%" }}>
              <SearchIcon style={{ marginRight: "0.2rem", fontSize: "2rem" }} />
              Search
            </Button>
          </BottomFieldWrapper>
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
                  acousticness={el.acousticness}
                  danceability={el.danceability}
                  energy={el.energy}
                  instrumentalness={el.instrumentalness}
                  valence={el.valence}
                  liveness={el.liveness}
                  release_date={el.release_date}
                />
              );
            })
          ) : (
            <p className="no-results">No Results found</p>
          )}
          {searchData.results.length ? (
            <PaginationWrapper>
              <Pagination
                count={Math.ceil(searchData.count / 10)}
                page={page}
                onChange={handlePageChange}
                classes={{ ul: classes.ul }}
              />
            </PaginationWrapper>
          ) : (
            <div />
          )}
        </SearchWrapper>
        <PlaylistWrapper>
          <GenreWrapper>
            <h1>🎵 Genre</h1>
            <FormControlLabel
              control={
                <Checkbox
                  checked={acoustic}
                  onChange={(e) => handleCheckboxChange(e, "Acoustic")}
                  color="primary"
                />
              }
              label={"Acoustic"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={danceable}
                  onChange={(e) => handleCheckboxChange(e, "Danceable")}
                  color="primary"
                />
              }
              label={"Danceable"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={energetic}
                  onChange={(e) => handleCheckboxChange(e, "Energetic")}
                  color="primary"
                />
              }
              label={"Energetic"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={instrumental}
                  onChange={(e) => handleCheckboxChange(e, "Instrumental")}
                  color="primary"
                />
              }
              label={"Instrumental"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={happy}
                  onChange={(e) => handleCheckboxChange(e, "Happy")}
                  color="primary"
                />
              }
              label={"Happy"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sad}
                  onChange={(e) => handleCheckboxChange(e, "Sad")}
                  color="primary"
                />
              }
              label={"Sad"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={live}
                  onChange={(e) => handleCheckboxChange(e, "Live")}
                  color="primary"
                />
              }
              label={"Live"}
            />
          </GenreWrapper>
          <PlaylistCard />
          <TopSearch topSearchData={topSearchData} />
        </PlaylistWrapper>
      </ResultWrapper>
      <Circle />
    </StyledMusicPage>
  );
};

export default MusicPage;

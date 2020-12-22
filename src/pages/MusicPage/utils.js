import axios from "axios";
import { setIsLoading } from "../../actions/globalActions";

const base_url = process.env.REACT_APP_API_KEY +'/spotify/';

const filterMapping = {
  title: "name",
  artist: "artists",
};

export const fetchMusic = async (
  search,
  filter,
  pageOffset,
  explicit,
  yearFrom,
  yearTo,
  dispatch
) => {
  let api_spotipy;
  if (filter.includes("all")) {
    if (pageOffset) {
      api_spotipy = `${base_url}?search=${search}&offset=${pageOffset}`;
    } else {
      api_spotipy = `${base_url}?search=${search}`;
    }
  } else {
    if (pageOffset) {
      api_spotipy = `${base_url}?search=${filterMapping[filter]}:${search}&limit=10&offset=${pageOffset}`;
    } else {
      api_spotipy = `${base_url}?search=${filterMapping[filter]}:${search}`;
    }
  }

  if (["1", "0"].includes(explicit)) {
    api_spotipy = api_spotipy + `&explicit=${explicit}`;
  }

  if (yearFrom || yearTo) {
    api_spotipy = api_spotipy + `&year__range=${yearFrom}__${yearTo}`;
  }

  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(api_spotipy);
    const data = response.data;
    dispatch(setIsLoading(false));

    return data;
  } catch (err) {
    dispatch(setIsLoading(false));
    console.log(err);
  }
};

export const fetchTopSearch = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_KEY +'/log/get/');
    const data = response.data.search;

    return data;
  } catch (err) {
    console.log(err);
  }
};

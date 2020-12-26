import axios from "axios";
import { setIsLoading } from "../../actions/globalActions";

const base_url = "https://api-spotipy.herokuapp.com/spotify/";

const filterMapping = {
  title: "name",
  artist: "artists",
};

export const initialSeachData = {
  count: 0,
  next: null,
  previous: null,
  facets: {},
  results: [],
};

export const fetchMusic = async (
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
    api_spotipy += `&explicit=${explicit}`;
  }

  if (yearFrom || yearTo) {
    api_spotipy += `&year__range=${yearFrom}__${yearTo}`;
  }

  if (acoustic) {
    api_spotipy += `&acousticness__gte=0.5`;
  }

  if (danceable) {
    api_spotipy += `&danceability__gte=0.5`;
  }

  if (energetic) {
    api_spotipy += `&energy__gte=0.5`;
  }

  if (instrumental) {
    api_spotipy += `&instrumentalness__gte=0.5`;
  }

  if (happy) {
    api_spotipy += `&valence__gte=0.5`;
  }

  if (sad) {
    api_spotipy += `&valence__lt=0.5`;
  }

  if (live) {
    api_spotipy += `&liveness__gt=0.8`;
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

    return initialSeachData;
  }
};

export const fetchTopSearch = async () => {
  try {
    const response = await axios.get("https://api-spotipy.herokuapp.com/log/get/");
    const data = response.data.search;

    return data;
  } catch (err) {
    console.log(err);

    return [];
  }
};

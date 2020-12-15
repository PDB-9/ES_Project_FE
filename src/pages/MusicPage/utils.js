import axios from "axios";
import { setIsLoading } from "../../actions/globalActions";

const base_url = "https://api-spotipy.herokuapp.com/spotify/";

const filterMapping = {
  title: "name",
  artist: "artists",
  year: "year",
};

export const fetchMusic = async (search, filter, pageOffset, dispatch) => {
  let api_spotipy;
  if (filter.includes("all")) {
    if (pageOffset) {
      api_spotipy = `${base_url}?offset=${pageOffset}&search=${search}`;
    } else {
      api_spotipy = `${base_url}?search=${search}`;
    }
  } else {
    if (pageOffset) {
      api_spotipy = `${base_url}?${filterMapping[filter]}=${search}&limit=10&offset=${pageOffset}`;
    } else {
      api_spotipy = `${base_url}?${filterMapping[filter]}=${search}`;
    }
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

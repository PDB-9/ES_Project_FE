import axios from "axios";
import { setIsLoading } from "../../actions/globalActions";

const base_url = "https://api-spotipy.herokuapp.com/spotify/";

export const fetchMusic = async (search, pageOffset, dispatch) => {
  let api_spotipy;
  if (pageOffset) {
    api_spotipy = `${base_url}?offset=${pageOffset}&search=${search}`;
  } else {
    api_spotipy = `${base_url}?search=${search}`;
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

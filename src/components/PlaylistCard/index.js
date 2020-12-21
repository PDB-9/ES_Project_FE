import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { setPlaylist } from "../../actions/globalActions";
import { getPlaylist } from "../../selectors/global";
import { USER_PLAYLIST } from "../../constants/globalConstants";
import { StyledPlaylistCard, DetailWrapper } from "./style";

const PlaylistCard = () => {
  const playlist = useSelector((state) => getPlaylist(state));
  const dispatch = useDispatch();

  useEffect(() => {
    const localPlaylist = getLocalStorageValue(USER_PLAYLIST);
    if (localPlaylist) {
      dispatch(setPlaylist(localPlaylist));
    }
  }, [dispatch]);

  //get data playlist from local storage
  const getLocalStorageValue = (name) => {
    const getLocalPlaylist = localStorage.getItem(name);
    if (getLocalPlaylist) {
      return JSON.parse(getLocalPlaylist);
    } else return null;
  };

  const handleDelete = (title) => {
    const newPlaylist = [...playlist];
    const removeIndex = newPlaylist.map((el) => el.title).indexOf(title);
    newPlaylist.splice(removeIndex, 1);
    localStorage.setItem(USER_PLAYLIST, JSON.stringify(newPlaylist));
    dispatch(setPlaylist(newPlaylist));
  };

  return (
    <StyledPlaylistCard>
      <h1>🎵 My Playlist</h1>
      {playlist && playlist.length ? (
        playlist.map((el, idx) => {
          return (
            <div key={idx}>
              <DetailWrapper>
                <div>
                  <p className="title">{el.title}</p>
                  <p className="artists">{el.artists}</p>
                </div>
                <div onClick={() => handleDelete(el.title)} className="delete">
                  <DeleteIcon style={{ fontSize: "1.2rem" }} />
                </div>
              </DetailWrapper>
              <iframe
                title={el.title}
                src={`https://open.spotify.com/embed/track/${el.id}`}
                height="80"
                width="100%"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          );
        })
      ) : (
        <div className="empty">
          <h3>Empty</h3>
          <p>Add songs to your playlist</p>
        </div>
      )}
    </StyledPlaylistCard>
  );
};

export default PlaylistCard;

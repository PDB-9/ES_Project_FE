import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { setPlaylist } from "../../actions/globalActions";
import { getPlaylist } from "../../selectors/global";
import { USER_PLAYLIST } from "../../constants/globalConstants";
import { Button } from "../index";
import { StyledCard, TitleTopWrapper, DetailWrapper, ExplicitWrapper } from "./style";

const Card = ({ id, title, artists, year, duration, explicit }) => {
  const playlist = useSelector((state) => getPlaylist(state));
  const dispatch = useDispatch();

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const handleAdd = () => {
    const newPlaylist = [...playlist];
    newPlaylist.push({ id, title, artists });
    localStorage.setItem(USER_PLAYLIST, JSON.stringify(newPlaylist));
    dispatch(setPlaylist(newPlaylist));
  };

  return (
    <StyledCard>
      <TitleTopWrapper>
        <p className="title">{title}</p>
        {playlist.filter((el) => el.title === title).length > 0 ? (
          <div />
        ) : (
          <Button onClick={handleAdd} style={{ padding: "0rem 0.4rem" }}>
            <AddIcon style={{ fontSize: "2rem" }} />
          </Button>
        )}
      </TitleTopWrapper>
      <p className="artist">
        <span className="by">By </span>
        {artists}
      </p>
      <DetailWrapper>
        {year} • {millisToMinutesAndSeconds(duration)}{" "}
        {explicit.includes("1") ? (
          <>
            • <ExplicitWrapper>Explicit</ExplicitWrapper>
          </>
        ) : (
          <div />
        )}
      </DetailWrapper>
      <iframe
        title={title}
        src={`https://open.spotify.com/embed/track/${id}`}
        height="80"
        width="100%"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </StyledCard>
  );
};

export default Card;

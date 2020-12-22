import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { setPlaylist } from "../../actions/globalActions";
import { getPlaylist } from "../../selectors/global";
import { USER_PLAYLIST } from "../../constants/globalConstants";
import { Button } from "../index";
import { StyledCard, TitleTopWrapper, DetailWrapper, ChipWrapper } from "./style";

const Card = ({
  id,
  title,
  artists,
  year,
  duration,
  explicit,
  acousticness,
  danceability,
  energy,
  instrumentalness,
  valence,
  liveness,
  release_date,
}) => {
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
        {explicit.includes("1") && (
          <>
            • <ChipWrapper color={"red"}>Explicit</ChipWrapper>
          </>
        )}
        {acousticness >= 0.5 && (
          <>
            • <ChipWrapper color={"brown"}>Acoustic</ChipWrapper>
          </>
        )}
        {danceability >= 0.5 && (
          <>
            • <ChipWrapper color={"purple"}>Danceable</ChipWrapper>
          </>
        )}
        {energy >= 0.5 && (
          <>
            • <ChipWrapper color={"hotpink"}>Energetic</ChipWrapper>
          </>
        )}
        {instrumentalness >= 0.5 && (
          <>
            • <ChipWrapper color={"blue"}>Instrumental</ChipWrapper>
          </>
        )}
        {valence >= 0.5 && (
          <>
            • <ChipWrapper color={"green"}>Happy</ChipWrapper>
          </>
        )}
        {valence < 0.5 && (
          <>
            • <ChipWrapper color={"gray"}>Sad</ChipWrapper>
          </>
        )}
        {liveness > 0.8 && (
          <>
            • <ChipWrapper color={"orange"}>Live</ChipWrapper>
          </>
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
      <div className="date">Date of release: {release_date}</div>
    </StyledCard>
  );
};

export default Card;

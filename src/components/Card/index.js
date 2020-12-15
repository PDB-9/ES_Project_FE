import React from "react";
import { StyledCard, DetailWrapper, ExplicitWrapper } from "./style";

const Card = ({ id, title, artists, year, duration, explicit }) => {
  console.log("🚀 ~ file: index.js ~ line 5 ~ Card ~ explicit", explicit);
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <StyledCard>
      <p className="title">{title}</p>
      <p className="artist">
        <span className="by">By </span>
        {artists}
      </p>
      <DetailWrapper>
        {year} • {millisToMinutesAndSeconds(duration)}{" "}
        {explicit ? (
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

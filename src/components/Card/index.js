import React from "react";
import { StyledCard, DetailWrapper, ExplicitWrapper } from "./style";

const Card = ({ id, title, artists, year, duration, explicit }) => {
  return (
    <StyledCard>
      <p className="title">{title}</p>
      <p className="artist">
        <span className="by">By </span>
        {artists}
      </p>
      <DetailWrapper>
        {year} • {duration}{" "}
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

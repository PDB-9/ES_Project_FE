import React from "react";
import { StyledTopSearchCard, TopSearchWrapper } from "./style";

const TopSearch = ({ topSearchData }) => {
  return (
    <StyledTopSearchCard>
      <h1>🔎 Search Trends</h1>
      {topSearchData && topSearchData.length ? (
        topSearchData.map((el, idx) => {
          return (
            <TopSearchWrapper key={idx}>
              <p className="title">{el.term}</p>
              <p>{el.count}</p>
            </TopSearchWrapper>
          );
        })
      ) : (
        <div className="empty">
          <p>There's no data</p>
        </div>
      )}
    </StyledTopSearchCard>
  );
};

export default TopSearch;

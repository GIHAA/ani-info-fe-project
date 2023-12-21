import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const AnimePageContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around; 
`;

const AnimeItemContainer = styled.div`
  width: 12em;
  height: 16em;
  margin-bottom: 14em; 
`;

const AnimeCover = styled.div`
  width: 100%;
  height: 20em;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AnimeTitle = styled.h6`
  font-size: 13px;
  margin-top: 8px;
  padding: 0;
  margin-top: 0.5em;
  color: #000;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export function AnimePage() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) {
    return null;
  }

  return (
    <AnimePageContainer>
      {animePage?.media?.map((anime) => (
        <AnimeItemContainer key={anime?.id}>
          <AnimeCover>
            <img
              src={anime?.coverImage?.extraLarge || ""}
              alt={anime?.title?.english || ""}
            />
          </AnimeCover>
          <AnimeTitle>{anime?.title?.english}</AnimeTitle>
        </AnimeItemContainer>
      ))}
    </AnimePageContainer>
  );
}

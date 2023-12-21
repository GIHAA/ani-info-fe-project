import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../../type";

const selectHomePage = (state: IRootState) => state.homePage;

export const makeSelectAnimePage = createSelector(
  selectHomePage,
  (homePage) => homePage.animePage
);

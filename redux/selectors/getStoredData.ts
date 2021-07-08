import { createSelector } from "reselect";
import { RootState } from "../store";
import {} from "../../components/types";

const selectSelf = (state: RootState) => state;

const combinedData = (state: RootState) => [
  state.getStoredData.accessTokenStoreData,
  state.getStoredData.userStoreData,
];

export const getData = createSelector(selectSelf, combinedData);

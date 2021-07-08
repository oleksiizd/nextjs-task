import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Code } from "../../components/types";
import { InitialState } from "../../components/types";

const initialState: InitialState = {
  accessTokenStoreData: "",
  userStoreData: {},
};

export const dataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {
    accessTokenDataAdd: (state, action: PayloadAction<string>) => {
      state.accessTokenStoreData = action.payload;
    },
    userDataAdd: (state, action: PayloadAction<{}>) => {
      state.userStoreData = action.payload;
    },
  },
});

export const { accessTokenDataAdd, userDataAdd } = dataSlice.actions;

export default dataSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialStoreState, IStoreState } from "../../types/types";

const initialState: IInitialStoreState = {
  data: {
    localizedFirstName: "",
    localizedLastName: "",
    profilePicture: "",
  },
};

export const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IStoreState>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = userDataSlice.actions;
export default userDataSlice.reducer;

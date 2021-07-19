import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnswerType } from "../../types/types";

const initialState = {
  data: {
    localizedFirstName: "",
    localizedLastName: "",
    profilePicture: {},
  },
};

export const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IAnswerType>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = userDataSlice.actions;
export default userDataSlice.reducer;

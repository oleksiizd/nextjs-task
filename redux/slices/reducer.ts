import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDataState, ILinkedinUserResponse } from "../../types/types";

const initialState: IUserDataState = {
  firstName: "",
  lastName: "",
  picture: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ILinkedinUserResponse>) => {
      state.firstName = action.payload.localizedFirstName;
      state.lastName = action.payload.localizedLastName;
      state.picture =
        action.payload.profilePicture[
          "displayImage~"
        ].elements[1].identifiers[0].identifier;
    },
  },
});
export const { setData } = userDataSlice.actions;
export default userDataSlice.reducer;

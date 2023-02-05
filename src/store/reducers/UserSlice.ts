import { fetchUsers } from "./ActionCreator";
import { IUser } from "./../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSlice {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserSlice = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

import { userSlice } from "./UserSlice";
import { IUser } from "./../../models/IUser";
import axios from "axios";
import { AppDispatch } from "./../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     if (error instanceof Error) {
//       dispatch(userSlice.actions.usersFetchingError(error.message));
//     }
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить посты");
    }
  }
);

// export const fetchUsers2 = createAsyncThunk(
//   "users/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get<IUser[]>(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Произошла ошибка");
//     }
//   }
// );

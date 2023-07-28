import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IState, IUser } from "./type";
import { getAllUsers } from "../../../function/getAllUsers";
import { AxiosResponse } from "axios";

export const getUsers = createAsyncThunk("usersSlice/getUsers", async () => {
  const data: AxiosResponse<IUser[]> = await getAllUsers();
  return data.data;
});

const initialState: IState = {
  loading: false,
  error: false,
  users: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = false
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = true
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        console.log(action.payload)
        state.users = action.payload;
        state.loading = false;
      })
  },
});

export const usersReducer = usersSlice.reducer;

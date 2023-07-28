import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";

const rootReducer = combineReducers({ usersReducer });

export const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type AppSelector = ReturnType<typeof store.getState>
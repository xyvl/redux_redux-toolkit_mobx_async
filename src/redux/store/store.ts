import { combineReducers, createStore } from "redux";
import { usersRootReducer } from "./usersSlice/usersReducer"

const rootReducer = combineReducers({usersRootReducer})

export const store = createStore(rootReducer)
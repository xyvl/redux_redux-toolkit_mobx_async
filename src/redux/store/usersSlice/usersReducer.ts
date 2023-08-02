import { getAllUsers } from "../../../function/getAllUsers";
import { GETUSERS } from "./usersAction";

const initialState = { error: false, users: [] };

export const usersRootReducer = async (
  state = initialState,
  action: { type: typeof GETUSERS }
) => {
  switch (action.type) {
    case GETUSERS:
      const data = await getAllUsers();
      return { error: false, users: data.data };
    default:
      return state;
  }
};

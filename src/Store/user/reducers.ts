import { UserState, UserActionTypes, LOGIN, LOGOUT } from "./types";

const initialState: UserState = { info: null };

export function userReducer(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case LOGIN:
      return { info: action.payload };

    case LOGOUT:
      return { info: null };

    default:
      return state;
  }
}

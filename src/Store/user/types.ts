import { User } from "../../Resources/user";

export type UserState = {
  info: User | null;
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserActionTypes = LoginAction | LogoutAction;

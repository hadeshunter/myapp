import { LOGIN, LOGOUT } from "./types";
import { User } from "../../Resources/user";

export function login(user: User) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

import { translateError } from "./translate";
import configureStore from "../Store";
import { LOGOUT } from "../Store/user/types";

export interface ResponseData {
  status: string;
  data: any;
  msg: string;
}

export const store = configureStore();

// export const fetcher = (
//   path: string
// ) => fetch(process.env.NEXT_PUBLIC_API_URL + path).then(r => r.json())

async function request<T>(
  method: string,
  path: string,
  _headers?: HeadersInit,
  body?: string
): Promise<T> {
  const url = process.env.NEXT_PUBLIC_API_URL + path;
  const headers = { ..._headers, "Content-Type": "application/json" };
  const response = await fetch(url, { method, headers, body });

  if (response.ok) return response.json();
  if (response.status === 404 || response.status === 403 || response.status === 401) {
    store.dispatch({
      type: LOGOUT,
    });
    return {} as T;
  }
  const { error } = await response.json();
  throw Error(translateError(error));
}

const getAuthHeader = (token?: string) =>
  token ? ({ Authorization: "Bearer " + token } as HeadersInit) : {};

export default {
  get: <T>(path: string, token?: string) => {
    return request<T>("GET", path, getAuthHeader(token));
  },
  post: <T>(path: string, token?: string, body?: string) => {
    return request<T>("POST", path, getAuthHeader(token), body);
  },
  delete: <T>(path: string, token?: string, body?: string) => {
    return request<T>("DELETE", path, getAuthHeader(token), body);
  },
};

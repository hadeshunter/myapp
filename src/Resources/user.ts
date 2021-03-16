import api from "./api";
import { ResponseData } from "./api";

export interface User {
	name: string;
	age: number;
	email: string;
	address: string;
	password: string;
}

export interface UsLogin {
	email: string;
	password: string;
}

export async function login(body: UsLogin) {
	return api.post<ResponseData>(`/api/user/login`, "", JSON.stringify(body));
}

export async function getAllUser(token: string) {
	return api.get<ResponseData>(`/api/user/getAll`, token);
}

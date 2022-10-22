import axios from "axios";
import { ICategoryResponse, IGameResponse, ILogin, ILoginResponse } from "../Constants/types";
const BASE_URL = "http://localhost:3001";
export const GetGamesAsync = async () => {
	let response: IGameResponse = {} as IGameResponse;
	try {
		let res = await axios.get(`${BASE_URL}/games`);
		response = {
			games: res.data,
			status: true,
			message: "success",
		};
	} catch (error) {
		response = {
			games: undefined,
			status: false,
			message: "Bad request !",
		};
	}
	return response;
};
export const GetCategoriesAsync = async () => {
	let response: ICategoryResponse = {} as ICategoryResponse;
	try {
		let res = await axios.get(`${BASE_URL}/categories`);
		response = {
			categories: res.data,
			status: true,
			message: "success",
		};
	} catch (error) {
		response = {
			categories: undefined,
			status: false,
			message: "Bad request !",
		};
	}
	return response;
};

export const LogoutAsync = async (username: string) => {
	let response = {};
	try {
		let res = await axios.post(
			`${BASE_URL}/logout`,
			{
				username,
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			},
		);
		response = {
			data: res.data,
			status: true,
			message: "success",
		};
	} catch (error) {
		response = {
			data: null,
			status: false,
			message: "Bad request !",
		};
	}
	return response;
};

export const LoginAsync = async ({ username, password }: ILogin) => {
	let response: ILoginResponse = {} as ILoginResponse;
	try {
		let res = await axios.post(
			`${BASE_URL}/login`,
			{
				username,
				password,
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			},
		);
		response = {
			data: res.data.player,
			status: true,
			message: "success",
		};
	} catch (error: any) {
		response = {
			data: null,
			status: false,
			message: error.response.data.error,
		};
	}
	return response;
};

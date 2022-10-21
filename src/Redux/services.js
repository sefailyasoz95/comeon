import axios from "axios";
const BASE_URL = "http://localhost:3001";
export const GetGamesAsync = async () => {
	let response = {};
	try {
		let res = await axios.get(`${BASE_URL}/games`);
		response = {
			data: res.data,
			status: true,
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
export const GetCategoriesAsync = async () => {
	let response = {};
	try {
		let res = await axios.get(`${BASE_URL}/categories`);
		response = {
			data: res.data,
			status: true,
		};
	} catch (error) {
		console.log("error: ", error);
		response = {
			data: null,
			status: false,
			message: "Bad request !",
		};
	}
	return response;
};

export const LogoutAsync = async (username) => {
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

export const LoginAsync = async ({ username, password }) => {
	let response = {};
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
		};
	} catch (error) {
		console.log("error: ", error);
		response = {
			data: null,
			status: false,
			message: error.response.data.error,
		};
	}
	return response;
};

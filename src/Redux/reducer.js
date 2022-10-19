import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const initialState = {
	error: false,
	success: false,
	message: "",
	isAuthenticated: false,
	user: undefined,
	isFetchingUser: false,
};
const BASE_URL = "http://localhost:3001";
export const reducer = createSlice({
	name: "global",
	initialState,
	reducers: {
		login: async ({ username, password }) => {
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
					data: res.data,
					status: res.status,
				};
			} catch (error) {
				response = {
					data: null,
					status: 400,
					message: "Bad request !",
				};
			}
			return response;
		},
		logout: () => {},
		getGames: async () => {
			let response = {};
			try {
				let res = await axios.get(`${BASE_URL}/games`);
				response = {
					data: res.data,
					status: res.status,
				};
			} catch (error) {
				response = {
					data: null,
					status: 400,
					message: "Bad request !",
				};
			}
			return response;
		},
	},
	extraReducers: (builder) => {
		// builder
	},
});

export const { login, logout, getGames } = reducer.actions;

export default reducer.reducer;

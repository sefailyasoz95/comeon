import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin } from "../Constants/types";
import { GetCategoriesAsync, GetGamesAsync, LoginAsync, LogoutAsync } from "./services";

export const login = createAsyncThunk(`user/login`, async ({ username, password }: ILogin, thunkAPI) => {
	try {
		return await LoginAsync({ username, password });
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const logout = createAsyncThunk(`user/logout`, async (username: string, thunkAPI) => {
	try {
		return await LogoutAsync(username);
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getGames = createAsyncThunk(`others/getGames`, async (_, thunkAPI) => {
	try {
		return await GetGamesAsync();
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getCategories = createAsyncThunk(`others/getCategories`, async (_, thunkAPI) => {
	try {
		return await GetCategoriesAsync();
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

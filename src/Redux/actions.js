import { createAsyncThunk, th } from "@reduxjs/toolkit";
import { GetCategoriesAsync, GetGamesAsync, LoginAsync, LogoutAsync } from "./services";

export const login = createAsyncThunk(`user/login`, async ({ username, password }, thunkAPI) => {
	try {
		return await LoginAsync({ username, password });
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const logout = createAsyncThunk(`user/logout`, async (username, thunkAPI) => {
	try {
		return await LogoutAsync(username);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getGames = createAsyncThunk(`others/getGames`, async (thunkAPI) => {
	try {
		return await GetGamesAsync();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getCategories = createAsyncThunk(`others/getCategories`, async (thunkAPI) => {
	try {
		return await GetCategoriesAsync();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

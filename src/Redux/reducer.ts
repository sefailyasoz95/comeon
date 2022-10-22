import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, ICategoryResponse, IGame, IGameResponse, ILoginResponse, InitialState } from "../Constants/types";
import { getCategories, getGames, login, logout } from "./actions";
export const initialState: InitialState = {
	error: false,
	success: false,
	message: "",
	isAuthenticated: false,
	user: undefined,
	isFetchingUser: false,
	games: [] as IGame[],
	isFethingGames: false,
	isFetchingCategories: false,
	categories: [] as ICategory[],
};

export const reducer = createSlice({
	name: "global",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// *********** LOGIN START *********** \\
			.addCase(login.pending, (state) => {
				state.isFetchingUser = true;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
				if (action.payload.status) {
					state.isAuthenticated = true;
					state.user = action.payload.data;
					state.success = true;
				} else {
					state.message = action.payload.message;
					state.error = true;
				}
				state.isFetchingUser = false;
			})
			.addCase(login.rejected, (state, action) => {
				state.error = true;
				state.isFetchingUser = false;
				// *********** LOGIN END *********** \\
			}) // *********** LOGOUT START *********** \\
			.addCase(logout.pending, (state) => {
				state.isFetchingUser = true;
				state.success = false;
			})
			.addCase(logout.fulfilled, (state, action: any) => {
				if (action.payload.status) {
					state.isAuthenticated = false;
					state.user = undefined;
				} else {
					state.message = action.payload.message;
					state.error = true;
				}
				state.isFetchingUser = false;
			})
			.addCase(logout.rejected, (state, action) => {
				state.error = true;
				state.isFetchingUser = false;
				// *********** LOGOUT END *********** \\
			}) // *********** GET GAMES START *********** \\
			.addCase(getGames.pending, (state) => {
				state.isFethingGames = true;
			})
			.addCase(getGames.fulfilled, (state, action: PayloadAction<IGameResponse>) => {
				if (action.payload.status) {
					state.games = action.payload.games;
					state.success = true;
				} else {
					state.message = action.payload.message;
					state.error = true;
				}
				state.isFethingGames = false;
			})
			.addCase(getGames.rejected, (state, action) => {
				state.error = true;
				state.isFethingGames = false;
				// *********** GET GAMES END *********** \\
			}) // *********** GET CATEGORIES START *********** \\
			.addCase(getCategories.pending, (state) => {
				state.isFetchingCategories = true;
			})
			.addCase(getCategories.fulfilled, (state, action: PayloadAction<ICategoryResponse>) => {
				if (action.payload.status) {
					state.categories = action.payload.categories;
					state.success = true;
				} else {
					state.message = action.payload.message;
					state.error = true;
				}
				state.isFetchingCategories = false;
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.error = true;
				state.isFetchingCategories = false;
				// *********** GET CATEGORIES END *********** \\
			});
	},
});

export const {} = reducer.actions;

export default reducer.reducer;

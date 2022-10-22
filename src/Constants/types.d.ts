export type InitialState = {
	error: boolean;
	success: boolean;
	message: string;
	isAuthenticated: boolean;
	user?: any;
	isFetchingUser: boolean;
	games?: IGame[];
	categories?: ICategory[];
	isFethingGames: boolean;
	isFetchingCategories: boolean;
};
export type ILogin = {
	username: string;
	password: string;
};
export type IGeneralResponse = {
	status: boolean;
	message: string;
};
export type ILoginResponse = IGeneralResponse & {
	data: any;
};
export type IGame = {
	categoryIds: number[];
	code: string;
	description: string;
	icon: string;
	name: string;
};

export type IGameResponse = IGeneralResponse & {
	games?: IGame[];
};
export type ICategory = {
	id: number;
	name: string;
};
export type ICategoryResponse = IGeneralResponse & {
	categories?: ICategory[];
};

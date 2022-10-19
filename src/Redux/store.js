import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
	reducer: {
		global: reducer,
	},
});
export default store;

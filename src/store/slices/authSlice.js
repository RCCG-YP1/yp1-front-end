import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: localStorage.getItem("token"),
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, { payload: { user, token } }) => {
			state.user = user;
			state.token = token;
			state.isAuthenticated = true;
			localStorage.setItem("token", token);
		},
		logout: state => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			window.localStorage.clear();
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

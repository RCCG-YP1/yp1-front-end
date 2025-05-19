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
		setUserData: (state, { payload: user }) => {
			state.user = user;
			state.isAuthenticated = true;
		},
		setUserToken: (state, { payload: token }) => {
			state.token = token;
			state.isAuthenticated = true;
		},
		logout: state => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			window.localStorage.clear();
		},
	},
});

export const { setUserData, logout, setUserToken } = authSlice.actions;
// selector to select user details from the store
export const selectCurrentUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export default authSlice.reducer;

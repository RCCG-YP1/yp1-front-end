import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import authReducer, { logout } from "./slices/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "@/services/auth.api";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	[authApi.reducerPath]: authApi.reducer,
	auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
		}).concat(api.middleware),
});

export const persistor = persistStore(store);

// hooks - reusable functions
export const logOutHandler = (redirect = false) => {
	store.dispatch(logout({ redirect }));
};

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { generalApi } from "../services";
import authReducer, { logout } from "./slices/authSlice";
import locationReducer from "./slices/locationSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "@/services/auth.api";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const rootReducer = combineReducers({
	[generalApi.reducerPath]: generalApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	auth: authReducer,
	location: locationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
		})
			.concat(generalApi.middleware)
			.concat(authApi.middleware),
});

export const persistor = persistStore(store);

// hooks - reusable functions
export const logOutHandler = (redirect = false) => {
	store.dispatch(logout({ redirect }));
};

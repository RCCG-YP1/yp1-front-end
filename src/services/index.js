import { API_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// move and split endpoints for efficient cide splitting
export const generalApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	reducerPath: "api",
	tagTypes: ["userData"],
	endpoints: () => ({}),
});

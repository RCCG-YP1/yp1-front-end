import { API_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
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
	tagTypes: [],
	endpoints: builder => ({
		// Add your endpoints here
		getParishes: builder.query({
			query: () => "parishes",
		}),
		getEvents: builder.query({
			query: () => "events",
		}),
	}),
});

export const { useGetParishesQuery, useGetEventsQuery } = api;

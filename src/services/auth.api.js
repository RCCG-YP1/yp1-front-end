import { API_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: headers => {
		headers.set("Sec-Fetch-Site", `same-origin`);
		return headers;
	},
});

export const authApi = createApi({
	baseQuery,
	reducerPath: "authApi",
	tagTypes: ["userData"],
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => {
				return {
					url: "/login",
					method: "POST",
					body: credentials,
				};
			},
			invalidatesTags: ["userData"],
		}),
		register: builder.mutation({
			query: body => {
				return {
					url: "/register",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["userData"],
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

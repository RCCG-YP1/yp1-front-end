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
	tagTypes: ["userData", "settings", "transactions"],
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
		}),
		register: builder.mutation({
			query: credentials => ({
				url: "/register",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

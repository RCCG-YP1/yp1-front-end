import { generalApi } from ".";

export const adminApi = generalApi.injectEndpoints({
	endpoints: builder => ({
		getAdminParishes: builder.query({
			query: () => "admin/church-type/all",
		}),
		getAdminDashboardData: builder.query({
			query: () => "admin/dashboard",
		}),
		getAdminPastorLevel: builder.query({
			query: () => "admin/pastor-level",
		}),
		addPastor: builder.mutation({
			query: body => ({
				url: `admin/create-pastor`,
				method: "POST",
				body,
			}),
		}),
		addParish: builder.mutation({
			query: body => ({
				url: `admin/create-pastor`,
				method: "POST",
				body,
			}),
		}),
		addInformation: builder.mutation({
			query: body => ({
				url: `admin/create-information`,
				method: "POST",
				body,
			}),
		}),
		getAdminInformation: builder.query({
			query: () => ({
				url: `admin/informations`,
			}),
		}),
	}),
});

export const {
	useGetAdminParishesQuery,
	useGetAdminDashboardDataQuery,
	useGetAdminPastorLevelQuery,
	useAddPastorMutation,
	useAddParishMutation,
	useAddInformationMutation,
	useGetAdminInformationQuery,
} = adminApi;

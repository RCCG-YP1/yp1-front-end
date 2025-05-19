import { setUserData } from "@/store/slices/authSlice";
import { generalApi } from ".";

export const api = generalApi.injectEndpoints({
	endpoints: builder => ({
		getLoggedInUserDetail: builder.query({
			query: () => "user/info",
			providesTags: ["userData"],
			async onCacheEntryAdded(_id, { dispatch, cacheDataLoaded }) {
				try {
					const { data } = await cacheDataLoaded;
					dispatch(setUserData(data?.user));
				} catch (err) {
					console.error(err);
				}
			},
		}),
		getParishes: builder.query({
			query: () => "church-type/all",
		}),
		getHomeDetails: builder.query({
			query: () => "home",
		}),
		getExplore: builder.query({
			query: (page = 1) => `explore?page=${page}`,
		}),
		getEvents: builder.query({
			query: (page = 1) => `events?page=${page}`,
		}),
		getParishById: builder.query({
			query: id => `church/${id}`,
		}),
		getPastorById: builder.query({
			query: id => `church/${id}`,
		}),
		searchParish: builder.query({
			query: ({ query, address, city, name, state }) => {
				return {
					url: "search",
					method: "GET",
					params: {
						q: query,
						address,
						city,
						name,
						state,
					},
				};
			},
		}),
	}),
});

export const {
	useGetParishesQuery,
	useGetEventsQuery,
	useGetExploreQuery,
	useSearchParishQuery,
	useGetHomeDetailsQuery,
	useGetParishByIdQuery,
	useGetPastorByIdQuery,
	useGetLoggedInUserDetailQuery,
	useLazyGetLoggedInUserDetailQuery,
} = api;

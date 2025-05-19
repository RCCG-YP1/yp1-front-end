import Search from "@/components/forms/search";
import { useSearchParishQuery } from "@/services/api";
import { useSelector } from "react-redux";
import { useState } from "react";
import EventList from "./widgets/event-list";
import ParishNearMe from "./widgets/parish-near-me";

export default function Explore() {
	const { city } = useSelector(state => state.location);
	const [searchTerm, setSearchTerm] = useState("");

	const { data: searchResults, isFetching: isSearching } = useSearchParishQuery(
		{ query: searchTerm || city },
		{ skip: !searchTerm }
	);

	const handleSearch = query => {
		setSearchTerm(query);
	};

	return (
		<div>
			<Search
				onSearch={handleSearch}
				searchResults={searchResults?.result || []}
				isLoading={isSearching}
			/>
			<>
				<ParishNearMe />
				<EventList />
			</>
		</div>
	);
}

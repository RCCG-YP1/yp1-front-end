import { LocationPinIcon } from "@/assets/icons";
import EventCard from "@/components/event-card";
import Search from "@/components/forms/search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ListItem, { MOCK_PARISH } from "@/components/list-item";

const SUGGESTED_PARISHES = Array(6).fill(MOCK_PARISH);

export default function Explore() {
	const navigate = useNavigate();
	const suggestions = ["Magodo phase 1", "Magodo phase 2", "Shangisha Magodo"];
	const { search } = useLocation();
	const searchQuery = new URLSearchParams(search).get("search");
	// const { city, error } = useUserLocation();
	const city = null;
	const error = true;
	const handleSearch = query => {
		console.log("Search query:", query);
		navigate(`?search=${query}`);
	};

	return (
		<div>
			<Search
				onSearch={handleSearch}
				suggestions={suggestions}
				otherSuggestions={
					<div className="px-4">
						<p className="my-4">Suggested parishes</p>
						{SUGGESTED_PARISHES.slice(3).map((el, i) => (
							<ListItem key={`suggested_parish_${i}`} />
						))}
					</div>
				}
			/>

			{searchQuery ? (
				<section>
					<p className="md:text-lg font-heading mt-6 mb-8">
						Showing results for parishes near{" "}
						<span className="text-secondary">{searchQuery}</span>
					</p>
					<div className="px-4">
						<ListItem />
						<ListItem />
						<ListItem />
					</div>
				</section>
			) : (
				<>
					<div className="flex justify-between items-center mt-4">
						<h3 className="text-lg font-heading font-medium">Parishes near you</h3>
						<button className="chip-base-btn bg-secondary-300 text-black">
							<LocationPinIcon />
							<span>{!error ? city : "Lagos"}</span>
						</button>
					</div>
					<section className="grid sm:grid-cols-3 grid-cols-2 gap-3 flex-wrap my-4">
						{SUGGESTED_PARISHES.map((item, i) => (
							<Link to={`${item.id}`} key={`parish_${i}`} className="suggested-card">
								<p className="font-medium font-heading">{item.name}</p>
								<p className="text-secondary text-sm">{item.address}</p>
							</Link>
						))}
					</section>
					<section className="mt-8">
						<h3 className="text-lg font-heading font-medium">Featured events</h3>
						<div className="flex flex-col gap-6 mt-4">
							{Array.from({ length: 6 }).map((_, i) => (
								<EventCard key={`event_${i}`} />
							))}
						</div>
					</section>
				</>
			)}
		</div>
	);
}

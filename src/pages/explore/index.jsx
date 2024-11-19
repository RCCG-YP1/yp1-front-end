import Search from "@/components/forms/search";

export default function Explore() {
	const suggestions = ["Magodo phase 1", "Magodo phase 2", "Shangisha Magodo"];

	const handleSearch = query => {
		console.log("Search query:", query);
	};

	return (
		<div>
			<Search onSearch={handleSearch} suggestions={suggestions} />
		</div>
	);
}

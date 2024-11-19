import { useState } from "react";
import SearchIcon from "@/assets/icons/search-icon";
import classNames from "classnames";
import LocationIcon from "@/assets/icons/location-icon";
import CloseIcon from "@/assets/icons/close-icon";

const Search = ({
	suggestions = [],
	onSearch,
	placeholder = "Search parish or location…",
}) => {
	const [query, setQuery] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const handleInputChange = e => {
		const input = e.target.value;
		setQuery(input);

		if (input.length > 0) {
			const filtered = suggestions.filter(suggestion =>
				suggestion.toLowerCase().includes(input.toLowerCase())
			);
			setFilteredSuggestions(filtered);
			setShowSuggestions(true);
		} else {
			setFilteredSuggestions([]);
			setShowSuggestions(false);
		}
	};

	const handleSuggestionClick = suggestion => {
		setQuery(suggestion);
		setShowSuggestions(false);
		if (onSearch) onSearch(suggestion);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setTimeout(() => setShowSuggestions(false), 150);
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSearch(query);
			}}
			className="relative w-full my-2"
		>
			<div
				className={classNames(
					"flex items-center px-4 w-full bg-input-bg border border-input-bg text-textSecondary rounded-md focus-within::border-secondary",
					isFocused && "border-secondary"
				)}
			>
				<SearchIcon />
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					onBlur={handleBlur}
					onFocus={() => setIsFocused(true)}
					placeholder={placeholder}
					className="bg-transparent w-full px-4 h-full py-2 focus:outline-none"
				/>
				{query && (
					<button
						type="button"
						onClick={() => setQuery("")}
						className="p-2 rounded-full hover:bg-background hover:bg-opacity-30"
					>
						<CloseIcon />
					</button>
				)}
			</div>
			{showSuggestions && (
				<ul className="absolute z-10 bg-background rounded-md w-full max-h-40 overflow-auto shadow-lg">
					{filteredSuggestions.length > 0 ? (
						filteredSuggestions.map((suggestion, index) => (
							<li
								key={index}
								onClick={() => handleSuggestionClick(suggestion)}
								onMouseDown={() => handleSuggestionClick(suggestion)}
								className="px-4 py-2 cursor-pointer flex gap-2 items-center"
							>
								<LocationIcon /> <span>{suggestion}</span>
							</li>
						))
					) : (
						<li className="px-4 py-2 text-gray-500">No results found</li>
					)}
				</ul>
			)}
		</form>
	);
};

export default Search;

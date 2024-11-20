import { useState, useRef, useEffect } from "react";
import SearchIcon from "@/assets/icons/search-icon";
import classNames from "classnames";
import LocationIcon from "@/assets/icons/location-icon";
import CloseIcon from "@/assets/icons/close-icon";

const Search = ({
	suggestions = [],
	onSearch,
	placeholder = "Search parish or location…",
	otherSuggestions,
}) => {
	const [query, setQuery] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const searchRef = useRef(null);

	// Handle input change to filter suggestions
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

	// Handle suggestion click
	const handleSuggestionClick = suggestion => {
		setQuery(suggestion);
		setShowSuggestions(false);
		if (onSearch) onSearch(suggestion);
	};

	// Handle input focus to highlight the border
	const handleFocus = () => {
		setIsFocused(true);
	};

	// Handle the logic for clicks outside the component to close suggestions
	const handleOutsideClick = e => {
		if (searchRef.current && !searchRef.current.contains(e.target)) {
			setShowSuggestions(false);
		}
	};

	useEffect(() => {
		// Listen for clicks outside the search component
		document.addEventListener("mousedown", handleOutsideClick);

		// Cleanup listener on component unmount
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSearch(query);
			}}
			className="relative w-full my-2"
			ref={searchRef} // Attach the ref to the component
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
					onFocus={handleFocus}
					placeholder={placeholder}
					className="bg-transparent w-full px-4 h-full py-2 focus:outline-none"
				/>
				{query && (
					<button
						type="button"
						onClick={() => {
							setQuery("");
							onSearch("");
						}}
						className="icon-btn"
					>
						<CloseIcon />
					</button>
				)}
			</div>

			{showSuggestions && (
				<ul className="absolute py-4 z-10 bg-background rounded-md w-full min-h-40 overflow-auto shadow-lg">
					{filteredSuggestions.length > 0 ? (
						filteredSuggestions.map((suggestion, index) => (
							<li
								key={index}
								onClick={() => handleSuggestionClick(suggestion)}
								onMouseDown={() => handleSuggestionClick(suggestion)}
								className="px-4 py-2 cursor-pointer hover:bg flex gap-2 items-center hover:bg-input-bg"
							>
								<LocationIcon className="text-secondary" /> <span>{suggestion}</span>
							</li>
						))
					) : (
						<li className="px-4 py-2 text-gray-500">No results found</li>
					)}
					{otherSuggestions}
				</ul>
			)}
		</form>
	);
};

export default Search;

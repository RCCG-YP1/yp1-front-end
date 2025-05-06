import { useState, useRef, useEffect } from "react";
import SearchIcon from "@/assets/icons/search-icon";
import classNames from "classnames";
import LocationIcon from "@/assets/icons/location-icon";
import CloseIcon from "@/assets/icons/close-icon";
import { formVariantClasses } from "./select";

const Search = ({
	suggestions = [],
	onSearch,
	placeholder = "Search parish or location…",
	theme = "dark",
	otherSuggestions,
}) => {
	const [query, setQuery] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);
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

	const handleKeyDown = (e) => {
		if (!showSuggestions) return;

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setSelectedIndex(prevIndex => 
					prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
				);
				break;
			case "ArrowUp":
				e.preventDefault();
				setSelectedIndex(prevIndex => 
					prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
				);
				break;
			case "Enter":
				e.preventDefault();
				if (selectedIndex >= 0) {
					handleSuggestionClick(filteredSuggestions[selectedIndex]);
				}
				break;
			case "Escape":
				setShowSuggestions(false);
				setSelectedIndex(-1);
				break;
			default:
				break;
		}
	};

	// Reset selected index when suggestions change
	useEffect(() => {
		setSelectedIndex(-1);
	}, [filteredSuggestions]);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSearch(query);
			}}
			className="relative w-full my-2"
			ref={searchRef}
		>
			<div className={classNames(
					"flex items-center px-4 w-full rounded-md focus-within::border-secondary",
					isFocused && "border-secondary",
					formVariantClasses[theme]
				)}
			>
				<SearchIcon />
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onKeyDown={handleKeyDown}
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
								className={classNames(
									"px-4 py-2 cursor-pointer hover:bg flex gap-2 items-center hover:bg-input-bg",
									selectedIndex === index && "bg-input-bg"
								)}
							>
								<LocationIcon className="text-secondary" />
								<span>{suggestion}</span>
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

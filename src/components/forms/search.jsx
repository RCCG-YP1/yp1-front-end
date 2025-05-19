import { useState, useRef, useEffect, useMemo } from "react";
import SearchIcon from "@/assets/icons/search-icon";
import classNames from "classnames";
import CloseIcon from "@/assets/icons/close-icon";
import { formVariantClasses } from "./select";
import ListItem, { SearchSkeleton } from "../list-item";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const Search = ({
	onSearch,
	placeholder = "Search parish or location…",
	theme = "dark",
	otherSuggestions,
	searchResults = [],
	isLoading = false,
}) => {
	const [query, setQuery] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const searchRef = useRef(null);
	const listRef = useRef(null);
	const itemRefs = useRef([]);
	const navigate = useNavigate();

	// Debounce search to prevent too many API calls
	const debouncedSearch = useMemo(
		() =>
			debounce(searchTerm => {
				if (searchTerm.length > 0) {
					onSearch(searchTerm);
				}
			}, 300),
		[onSearch]
	);

	const handleInputChange = e => {
		const input = e.target.value;
		setQuery(input);

		if (input.length > 0) {
			setShowSuggestions(true);
			debouncedSearch(input);
		} else {
			setShowSuggestions(false);
			onSearch("");
		}
	};

	const handleSuggestionClick = suggestion => {
		navigate(`/explore/${suggestion.id}`);
		setShowSuggestions(false);
		setQuery(suggestion.name);
	};

	const handleFocus = () => {
		setIsFocused(true);
		setShowSuggestions(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
		// Delay hiding suggestions to allow for click events
		setTimeout(() => {
			if (!searchRef.current?.contains(document.activeElement)) {
				setShowSuggestions(false);
			}
		}, 200);
	};

	const handleKeyDown = e => {
		if (!showSuggestions) return;

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setSelectedIndex(prevIndex => {
					const newIndex = prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0;
					// Scroll the selected item into view
					if (itemRefs.current[newIndex]) {
						itemRefs.current[newIndex].scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						});
					}
					return newIndex;
				});
				break;
			case "ArrowUp":
				e.preventDefault();
				setSelectedIndex(prevIndex => {
					const newIndex = prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1;
					// Scroll the selected item into view
					if (itemRefs.current[newIndex]) {
						itemRefs.current[newIndex].scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						});
					}
					return newIndex;
				});
				break;
			case "Enter":
				e.preventDefault();
				if (selectedIndex >= 0 && searchResults[selectedIndex]) {
					handleSuggestionClick(searchResults[selectedIndex]);
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

	// Reset refs when results change
	useEffect(() => {
		itemRefs.current = itemRefs.current.slice(0, searchResults.length);
	}, [searchResults]);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSearch(query);
			}}
			className="relative w-full my-2"
			ref={searchRef}
		>
			<div
				className={classNames(
					"flex items-center px-4 w-full rounded-md focus-within:border-secondary h-12",
					isFocused && "border-secondary",
					formVariantClasses[theme]
				)}
			>
				<SearchIcon className="text-gray-400" />
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
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
						className="icon-btn hover:bg-gray-700 rounded-full p-1"
					>
						<CloseIcon />
					</button>
				)}
			</div>

			{showSuggestions && (
				<ul
					className="absolute py-4 z-10 bg-background rounded-md w-full shadow-lg"
					ref={listRef}
				>
					{query && (
						<p className="px-4 text-sm font-medium text-gray-400 mb-4">
							Showing results for{" "}
							<span className="text-secondary">&quot;{query}&quot;</span>
						</p>
					)}

					<div className="overflow-auto max-h-[400px]">
						{isLoading ? (
							<SearchSkeleton />
						) : searchResults.length > 0 ? (
							searchResults.map((parish, index) => (
								<ListItem
									ref={el => (itemRefs.current[index] = el)}
									key={parish.id}
									onClick={() => handleSuggestionClick(parish)}
									className={classNames(
										"px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-input-bg my-0",
										selectedIndex === index && "bg-input-bg"
									)}
									item={{
										img_url: parish.logo,
										name: parish.name,
										subtext: parish.address,
										to: `/explore/${parish.id}`,
									}}
								/>
							))
						) : query ? (
							<li className="px-4 py-2 text-gray-500">No parishes found</li>
						) : (
							otherSuggestions
						)}
					</div>
				</ul>
			)}
		</form>
	);
};

export default Search;

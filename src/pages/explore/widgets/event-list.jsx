import EventCard from "@/components/event-card";
import { useGetEventsQuery } from "@/services/api";
import { useCallback, useEffect, useState } from "react";

export default function EventList() {
	const [page, setPage] = useState(1);
	const [events, setEvents] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const { data, isFetching } = useGetEventsQuery(page);

	// Update events when new data arrives
	useEffect(() => {
		if (data?.events?.data) {
			if (page === 1) {
				setEvents(data.events.data);
			} else {
				setEvents(prev => [...prev, ...data.events.data]);
			}
			setHasMore(data.events.current_page < data.events.last_page);
		}
	}, [data, page]);

	// Infinite scroll handler
	const handleScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			if (hasMore && !isFetching) {
				setPage(prev => prev + 1);
			}
		}
	}, [hasMore, isFetching]);

	// Add scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<section className="mt-8">
			<h3 className="text-lg font-heading font-medium">Featured events</h3>
			<div className="flex flex-col gap-6 mt-4">
				{events.map((event, i) => (
					<EventCard event={event} key={`event_${event.id}_${i}`} />
				))}
				{isFetching && (
					<div className="animate-pulse suggested-card">
						<div className="aspect-video mb-4 bg-input-bg rounded-lg"></div>
						<div className="h-4 bg-input-bg rounded w-3/4"></div>
					</div>
				)}
			</div>
		</section>
	);
}

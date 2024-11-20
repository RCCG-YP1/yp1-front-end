import { Link } from "react-router-dom";

const MOCK_EVENT = {
	img_url: "/images/event.png",
	title: "The Bridge 3rd year anniversary program",
	parish: "RCCG LSC The Bridge",
	date: "27 - 29 Sep, 2024",
	id: "12334",
};
export default function EventCard({ event = MOCK_EVENT }) {
	return (
		<Link to={`/events/${event.id}`} className="w-full">
			<div className="aspect-video rounded-lg">
				<img
					className="w-full h-full object-cover rounded-lg"
					src={event.img_url}
					alt={event.title}
				/>
			</div>
			<div className="p-4 space-y-2">
				<p className="text-lg">{event.title}</p>
				<div className="flex justify-between gap-3 text-sm text-secondary">
					<p>{event.parish}</p>
					<p>{event.date}</p>
				</div>
			</div>
		</Link>
	);
}

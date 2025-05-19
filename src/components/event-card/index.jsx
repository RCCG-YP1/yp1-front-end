import { format } from "date-fns";
import { Link } from "react-router-dom";

const MOCK_EVENT = {
	event_flyer: "/images/event.png",
	event_name: "The Bridge 3rd year anniversary program",
	parish: "RCCG LSC The Bridge",
	event_time: "27 - 29 Sep, 2024",
	id: "12334",
};
export default function EventCard({ event = MOCK_EVENT }) {
	return (
		<Link to={`/explore/events/${event.id}`} className="w-full">
			<div className="aspect-video rounded-lg bg-[#232323] relative">
				<img
					className="w-full h-full object-cover rounded-lg absolute inset-0"
					src={event.event_flyer}
					alt={event.event_name}
				/>
			</div>
			<div className="p-4 space-y-2">
				<div className="flex justify-between gap-3">
					<p className="text-lg">{event.event_name}</p>
					<p className="text-secondary text-sm">
						{format(event.event_time || new Date(), "dd MMM, yyyy")}
					</p>
					{/* <p>{event.parish}</p> */}
				</div>
			</div>
		</Link>
	);
}

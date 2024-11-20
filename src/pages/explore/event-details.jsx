import { GlobeIcon, MapIcon } from "@/assets/icons";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button";
import GoogleMapCard from "@/components/google-map-card";
import { useState } from "react";

const MOCK_EVENT = {
	img_url: "/images/event.png",
	title: "The Bridge 3rd year anniversary program",
	parish: "RCCG LSC The Bridge",
	date: "27 - 29 Sep, 2024",
	id: "12334",
	time: "Friday: 9 PM, Sunday: 8 AM",
	address:
		"RCCG The Bridge, Lagos Airport Hotel, 111, Obafemi Awolowo way, Ikeja Lagos",
	description:
		"Celebrating 3 years of divine increase and God’s faithfulness in RCCG The Bridge…",
};
export default function EventDetails() {
	const [event] = useState(MOCK_EVENT);

	const formattedAddress = encodeURIComponent(event.address); // Encode the address for URL safety
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

	return (
		<div className="w-full">
			<BackBtn />
			<div className="aspect-video rounded-lg">
				<img
					className="w-full h-full object-cover rounded-lg"
					src={event.img_url}
					alt={event.title}
				/>
			</div>
			<section className="p-4 space-y-4">
				<div>
					<p className="text-secondary text-sm">Event</p>
					<p className="text-lg">{event.title}</p>
				</div>
				<div>
					<p className="text-secondary text-sm">Details:</p>
					<p>{event.description}</p>
				</div>
				<div>
					<p className="text-secondary text-sm">Date:</p>
					<p>{event.date}</p>
				</div>
				<div>
					<p className="text-secondary text-sm">Time:</p>
					<p>{event.time}</p>
				</div>
			</section>

			<section className="mt-8">
				<GoogleMapCard address={event.address} />
				<div className="flex gap-4 mt-4">
					<Button color="white" variant="contained" className="flex-1">
						<GlobeIcon />
						Register online
					</Button>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={googleMapsUrl}
						className="flex-1 block w-full"
					>
						<Button className={"w-full"} color="secondary" variant="contained">
							<MapIcon />
							Get Directions
						</Button>
					</a>
				</div>
			</section>
		</div>
	);
}

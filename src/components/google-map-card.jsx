import { MapLocationIcon } from "@/assets/icons";

export default function GoogleMapCard({ address = "" }) {
	const formattedAddress = encodeURIComponent(address); // Encode the address for URL safety
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

	return (
		<a
			href={googleMapsUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-input-bg p-4 rounded-xl flex items-center gap-4"
		>
			<MapLocationIcon className="min-w-[18px] min-h-[16px]" />
			<div>
				<p>{address.split(",")[0]}</p> {/* Display the first part of the address */}
				<p className="text-sm">{address.split(",").slice(1).join(",")}</p>{" "}
				{/* Display the rest */}
			</div>
		</a>
	);
}

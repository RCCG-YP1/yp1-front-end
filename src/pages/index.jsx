import { MapLocationIcon } from "@/assets/icons";
import Search from "@/components/forms/search";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const formattedAddress = encodeURIComponent(
		"30 Rafu Babatunde, Apple Junction, Amuwo Odofin, Lagos"
	); // Encode the address for URL safety
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

	return (
		<div className="min-h-screen flex flex-col">
			<header className="py-4">
				<div className="flex items-center justify-center mb-4">
					<img
						src="/images/logo.png"
						alt="Youth Province 1"
						className="h-16 w-auto"
					/>
				</div>
				<h1 className="text-center text-2xl font-heading mb-4">
					The Believer&apos;s Bridge
				</h1>
				<div onClick={() => navigate("/explore")}>
					<Search
						placeholder="Search parish or location..."
						className="max-w-xl mx-auto"
					/>
				</div>
			</header>

			<main className="flex-1 py-4">
				<div className="relative mx-auto">
					<div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
						<iframe
							src="https://www.youtube.com/embed/7dXmDFqJfg4?si=ctwDrquU5sD1tlQ-"
							title="Pastor's Message"
							className="absolute top-0 left-0 w-full h-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>

				<div className="relative mx-auto z-[50] mt-8">
					<a
						href={googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-primary text-white p-4 rounded-2xl flex items-center gap-4 relative z-10"
					>
						<MapLocationIcon className="w-6 h-6 shrink-0" />
						<div>
							<h2 className="font-heading text-lg">Provincial headquarter</h2>
							<p className="text-sm opacity-90">
								30 Rafu Babatunde, Apple Junction, Amuwo Odofin, Lagos
							</p>
						</div>
					</a>
					<div className="absolute rounded-2xl z-0 bg-primary-300 -bottom-4 w-[93%] h-full left-1/2 -translate-x-1/2 mx-auto"></div>
				</div>
			</main>
		</div>
	);
}

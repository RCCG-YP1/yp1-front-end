import { MapLocationIcon } from "@/assets/icons";
import ErrorMsg from "@/components/error-msg";
import Search from "@/components/forms/search";
import { useGetHomeDetailsQuery } from "@/services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	const { data, isLoading, isError, error } = useGetHomeDetailsQuery();
	const formattedAddress = encodeURIComponent(data?.province?.address);
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

			{isError ? (
				<ErrorMsg error={error} />
			) : (
				<main className="flex-1 py-4">
					<div className="relative mx-auto">
						<div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
							{isLoading ? (
								<div className="animate-pulse absolute inset-0 bg-input-bg"></div>
							) : (
								<iframe
									src={data?.welcome_address?.replace("watch?v=", "embed/")}
									title="Pastor's Message"
									className="absolute top-0 left-0 w-full h-full"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							)}
						</div>
					</div>

					<div className="relative mx-auto z-[50] mt-8">
						<div className="bg-primary text-white p-4 rounded-2xl flex items-center gap-4 relative z-10">
							<MapLocationIcon className="w-6 h-6 shrink-0" />
							{isLoading ? (
								<div className="animate-pulse flex-grow space-y-2">
									<h2 className="h-4 bg-primary-300 w-1/2 rounded mb-3"></h2>
									<p className="h-3 bg-primary-300 w-4/5 rounded"></p>
									<p className="h-3 bg-primary-300 w-3/4 rounded"></p>
								</div>
							) : (
								<a
									href={data?.province?.map_link || googleMapsUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<h2 className="font-heading text-lg">Provincial headquarter</h2>
									<p className="text-sm opacity-90">{data?.province?.address}</p>
								</a>
							)}
						</div>
						<div className="absolute rounded-2xl z-0 bg-primary-300 -bottom-4 w-[93%] h-full left-1/2 -translate-x-1/2 mx-auto"></div>
					</div>
				</main>
			)}
		</div>
	);
}

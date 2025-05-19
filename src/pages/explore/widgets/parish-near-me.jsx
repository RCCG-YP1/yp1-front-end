import { LocationPinIcon } from "@/assets/icons";
import { useSearchParishQuery } from "@/services/api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ParishNearMe() {
	const { city, error, isLoading } = useSelector(state => state.location);
	const { data: parishesNearMe, isLoading: isNearParisheLoading } =
		useSearchParishQuery({ city }, { skip: !city });

	return (
		<div>
			{!error && (
				<>
					<div className="flex justify-between items-center mt-4">
						<h3 className="text-lg font-heading font-medium">Parishes near you</h3>
						<button className="chip-base-btn bg-secondary-300 text-black">
							<LocationPinIcon />
							<span>{!error ? city : "Lagos"}</span>
						</button>
					</div>
					<section className="grid sm:grid-cols-3 grid-cols-2 gap-3 flex-wrap my-4">
						{isNearParisheLoading || isLoading
							? Array(3)
									.fill("")
									.map((_, i) => (
										<div
											key={`parish_loading_${i}`}
											className="animate-pulse suggested-card"
										>
											<div className="h-4 mb-2 bg-input-bg rounded w-1/2"></div>
											<div className="h-4 bg-input-bg rounded w-3/4"></div>
										</div>
									))
							: parishesNearMe?.result?.map((item, i) => (
									<Link to={`${item.id}`} key={`parish_${i}`} className="suggested-card">
										<p className="font-medium font-heading">{item.name}</p>
										<p className="text-secondary text-sm">{item.address}</p>
									</Link>
							  ))}
					</section>
				</>
			)}
		</div>
	);
}

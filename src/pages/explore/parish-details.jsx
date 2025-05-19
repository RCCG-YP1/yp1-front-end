import {
	BookmarkIcon,
	FacebookIcon,
	GlobeIcon,
	InstagramIcon,
	MapIcon,
	SpotifyIcon,
	TiktokIcon,
	TwitterIcon,
	YoutubeIcon,
} from "@/assets/icons";
import Avatar from "@/components/avatar";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button";
import SuspenseContainer from "@/components/custom-suspense";
import GoogleMapCard from "@/components/google-map-card";
import ListItem, { MOCK_PARISH } from "@/components/list-item";
import ShareButton from "@/components/share-btn";
import { useGetParishByIdQuery } from "@/services/api";
import { useParams } from "react-router-dom";

export default function ParishDetails() {
	const { id } = useParams();

	const { data, isLoading, isError, error } = useGetParishByIdQuery(id);
	const formattedAddress = encodeURIComponent(data?.church?.address);
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

	return (
		<SuspenseContainer isLoading={isLoading} isError={isError} error={error}>
			<div className="relative w-[calc(100%_+_2rem)] -left-4 -top-4 h-[230px] md:h-[350px] aspect-video">
				<BackBtn className="absolute top-2 left-4" />
				<img
					src={MOCK_PARISH.backdrop_url}
					alt={data?.church?.name + "backdrop"}
					className="w-full h-full rounded-none object-cover"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent opacity-80"></div>
			</div>
			<section className="relative -mt-[50px]">
				<Avatar
					size="lg"
					variant="rounded"
					src={data?.church?.logo}
					alt={data?.church?.name}
					className="bg-white p-2"
				/>
				<div className="flex justify-between mt-4 gap-4 items-center">
					<h3 className="font-heading text-xl">{data?.church?.name}</h3>
					<div className="flex gap-2">
						<button className="icon-btn hover:bg-input-bg">
							<BookmarkIcon />
						</button>
						<ShareButton
							title={MOCK_PARISH.name}
							text={`Check out this church - ${data?.church?.address}`}
							url={googleMapsUrl}
						/>
					</div>
				</div>
				<div className="flex gap-4 mt-2 mb-8">
					<div className="chip-base-btn bg-primary text-white text-sm font-medium py-1">
						Area Headquarter
					</div>
					<button className="cursor-pointer chip-base-btn bg-white text-[#161616] text-sm font-medium py-1">
						Set as my church
					</button>
				</div>
				<GoogleMapCard address={data?.church?.address} />{" "}
				<div className="mt-8">
					<p>Church Leadership</p>
					{[
						{ ...data?.church?.pastor, role: "Pastor" },
						{ ...data?.church?.assistant_pastor, role: "Assistant Pastor" },
						{ ...data?.church?.associate_pastor, role: "Associate Pastor" },
					].map((el, i) => (
						<ListItem
							key={`leaders_${i}`}
							item={{
								name: el.name,
								subtext: el.role,
								img_url: el.profile_picture,
								to: "",
							}}
						/>
					))}
				</div>
				<div className="mt-10 flex gap-6 flex-wrap justify-center items-center p-4 border-t border-borderColor text-sm">
					<a
						href={`${data?.church?.instagram_link}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<InstagramIcon />
						<span>Instagram</span>
					</a>
					<a
						href={`${data?.church?.facebook_link}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<FacebookIcon />
						<span>Facebook</span>
					</a>
					<a
						href={`${data?.church?.youtube_link}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<YoutubeIcon />
						<span>Youtube</span>
					</a>
					<a
						href={`${data?.church?.x_link}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<TwitterIcon />
						<span>Twitter</span>
					</a>
					<a
						href={`${data?.church?.tiktok_link}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<TiktokIcon />
						<span>TikTok</span>
					</a>
					<a
						href={`${data?.church?.spotify_link}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<SpotifyIcon />
						<span>Spotify</span>
					</a>
				</div>
				<div className="flex gap-4 mt-8">
					{data?.church?.website_link && (
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={data?.church?.website_link}
							className="flex-1 block w-full"
						>
							<Button color="white" variant="contained" className="w-full">
								<GlobeIcon />
								Visit Website
							</Button>
						</a>
					)}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={data?.church?.map_link || googleMapsUrl}
						className="flex-1 block w-full"
					>
						<Button className={"w-full"} color="secondary" variant="contained">
							<MapIcon />
							Get Directions
						</Button>
					</a>
				</div>
			</section>
		</SuspenseContainer>
	);
}

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
import GoogleMapCard from "@/components/google-map-card";
import ListItem, { MOCK_PARISH } from "@/components/list-item";
import ShareButton from "@/components/share-btn";

export default function ParishDetails() {
	const formattedAddress = encodeURIComponent(MOCK_PARISH.address); // Encode the address for URL safety
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

	return (
		<div>
			<div className="relative w-[calc(100%_+_2rem)] -left-4 -top-4 h-[230px] md:h-[350px] aspect-video">
				<BackBtn className="absolute top-2 left-4" />
				<img
					src={MOCK_PARISH.backdrop_url}
					alt={MOCK_PARISH.name + "backdrop"}
					className="w-full h-full rounded-none object-cover"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent opacity-80"></div>
			</div>
			<section className="relative -mt-[50px]">
				<Avatar
					size="lg"
					variant="rounded"
					src={MOCK_PARISH.img_url}
					alt={MOCK_PARISH.name}
				/>
				<div className="flex justify-between mt-4 gap-4 items-center">
					<h3 className="font-heading text-xl">{MOCK_PARISH.name}</h3>
					<div className="flex gap-2">
						<button className="icon-btn hover:bg-input-bg">
							<BookmarkIcon />
						</button>
						<ShareButton
							title={MOCK_PARISH.name}
							text={`Check out this church - ${MOCK_PARISH.address}`}
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
				<GoogleMapCard address="RCCG The Bridge, Lagos Airport Hotel, 111, Obafemi Awolowo way, Ikeja Lagos" />{" "}
				<div className="mt-8">
					<p>Church Leadership</p>
					{MOCK_PARISH.church_leaders.map((el, i) => (
						<ListItem
							key={`leaders_${i}`}
							item={{ name: el.name, subtext: el.role, img_url: el.img, to: "" }}
						/>
					))}
				</div>
				<div className="mt-10 flex gap-6 flex-wrap justify-center items-center p-4 border-t border-borderColor text-sm">
					<a
						href={`https://www.instagram.com/${MOCK_PARISH.socials.instagram}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<InstagramIcon />
						<span>Instagram</span>
					</a>
					<a
						href={`https://www.facebook.com/${MOCK_PARISH.socials.youtube}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<FacebookIcon />
						<span>Facebook</span>
					</a>
					<a
						href={`https://www.youtube.com/${MOCK_PARISH.socials.youtube}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<YoutubeIcon />
						<span>Youtube</span>
					</a>
					<a
						href={`https://twitter.com/${MOCK_PARISH.socials.twitter}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<TwitterIcon />
						<span>Twitter</span>
					</a>
					<a
						href={`https://www.tiktok.com/${MOCK_PARISH.socials.tiktok}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<TiktokIcon />
						<span>TikTok</span>
					</a>
					<a
						href={`${MOCK_PARISH.socials.spotify}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<SpotifyIcon />
						<span>Spotify</span>
					</a>
				</div>
				<div className="flex gap-4 mt-8">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={""}
						className="flex-1 block w-full"
					>
						<Button color="white" variant="contained" className="w-full">
							<GlobeIcon />
							Visit Website
						</Button>
					</a>
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

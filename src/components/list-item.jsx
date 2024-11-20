import { Link } from "react-router-dom";
import Avatar from "./avatar";

// eslint-disable-next-line react-refresh/only-export-components
export const MOCK_PARISH = {
	img_url: "/images/parish-logo.png",
	backdrop_url: "/images/photobg.png",
	name: "RCCG LSC The Bridge",
	id: "12334",
	address: "12 Clark street, Magodo phase 1, Lagos",
	subtext: "12 Clark street, Magodo phase 1, Lagos",
	church_leaders: [
		{ name: "Pastor Oluwafemi Oyewumi", img: "", role: "Area Pastor" },
		{ name: "Pastor Shola Oladejo", img: "", role: "Assistant Pastor" },
		{ name: "Pastor Bolaji Asifat", img: "", role: "Associate Pastor" },
	],
	socials: {
		instagram: "",
		facebook: "",
		twitter: "",
		youtube: "",
		tiktok: "",
		spotify: "",
	},
};

export default function ListItem({
	item = {
		name: MOCK_PARISH.name,
		img_url: MOCK_PARISH.img_url,
		subtext: MOCK_PARISH.address,
		to: `/explore/${MOCK_PARISH.id}`,
	},
}) {
	return (
		<Link to={item.to} className="flex my-6 gap-4 items-center">
			<Avatar src={item.img_url} alt={item.name} />
			<div className="">
				<p>{item.name}</p>
				<p className="text-secondary text-sm">{item.subtext}</p>
			</div>
		</Link>
	);
}

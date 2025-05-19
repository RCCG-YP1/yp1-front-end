import { Link } from "react-router-dom";
import Avatar from "./avatar";
import classNames from "classnames";

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

export const SearchSkeleton = () => (
	<div className="animate-pulse space-y-4 px-4">
		{[1, 2, 3].map(i => (
			<div key={i} className="flex items-center space-x-4">
				<div className="h-12 w-12 bg-input-bg rounded-full"></div>
				<div className="flex-1 space-y-2">
					<div className="h-4 bg-input-bg rounded w-3/4"></div>
					<div className="h-3 bg-input-bg rounded w-1/2"></div>
				</div>
			</div>
		))}
	</div>
);

import { forwardRef } from "react";

export default forwardRef(function ListItem(
	{
		item = {
			name: MOCK_PARISH.name,
			img_url: MOCK_PARISH.img_url,
			subtext: MOCK_PARISH.address,
			to: `/explore/${MOCK_PARISH.id}`,
		},
		className = "",
		...props
	},
	ref
) {
	return (
		<Link
			ref={ref}
			to={item.to}
			className={classNames("flex my-6 gap-4 items-center", className)}
			{...props}
		>
			<Avatar src={item.img_url} alt={item.name} />
			<div className="">
				<p>{item.name}</p>
				<p className="text-secondary text-sm">{item.subtext}</p>
			</div>
		</Link>
	);
});

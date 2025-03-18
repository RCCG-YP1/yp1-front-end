import { useState } from "react";
import { SearchIcon } from "@/assets/icons";
import Image from "../../../public/images/Rectangle 10.png";
import Image2 from "../../../public/images/parish-logo.png";
import Chip from "@/components/chip";
import Input from "@/components/forms/input";
const pastorsData = {
	provincialLeadership: [
		{
			id: 1,
			name: "Pastor Oluwagbemileke  Adeboye",
			role: "Provincial Overseer",
			location: "New York Province",
			image: "public/images/pst_leke.jpeg",
		},
		{
			id: 2,
			name: "Pastor James Smith",
			role: "Assitant Overseer",
			location: "New York Province",
			image: "public/images/pst_white.jpeg",
		},
		{
			id: 3,
			name: "Pastor Andy Clark",
			role: "Executive Secretary",
			location: "New York Province",
			image: "public/images/pst_white.jpeg",
		},
	],

	ZonalPastors: [
		{ id: 4, name: "Pastor Oluwagbemileke  Adeboye", zone: "Zone A" },
		{ id: 5, name: "Pastor David Brown", zone: "Zone B" },
		{ id: 6, name: "Pastor Michael Davis", zone: "Zone C" },
		{ id: 7, name: "Pastor George Brown", zone: "Zone D" },
		{ id: 8, name: " Pastor William Davis", zone: "Zone E" },
	],

	areaPastors: [
		{ id: 9, name: "Pastor Oluwagbemileke  Adeboye", area: "Area 1" },
		{ id: 10, name: "Pastor Matthew Lewis", area: "Area 2" },
		{ id: 11, name: "Pastor Steven Walker", area: "Area 3" },
		{ id: 12, name: "Pastor Joseph Hall", area: "Area 4" },
	],
};

const parishes = [
	{
		id: 13,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Area",
	},
	{
		id: 14,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Zone",
	},
	{
		id: 15,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Parish",
	},
	{
		id: 16,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Area",
	},
	{
		id: 17,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Parish",
	},
	{
		id: 18,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Area",
	},
	{
		id: 19,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Zone",
	},
	{
		id: 20,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Area",
	},
	{
		id: 21,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Parish",
	},
	{
		id: 22,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Parish",
	},
	{
		id: 23,
		name: "RCCG LSC The Bridge",
		address: "111, Obafemi Awolowo way, Ikeja Lagos",
		category: "Parish",
	},
];

export default function Province() {
	const [activeTab, setActiveTab] = useState("leadership");
	const [activeButton, setActiveButton] = useState("zone");
	const { provincialLeadership, ZonalPastors, areaPastors } = pastorsData;

	const filteredParishes = parishes.filter(
		parish => parish.category.toLowerCase() === activeButton
	);
	return (
		<div>
			<div>
				<div className="flex justify-between items-center mb-4 lg:mt-16">
					<div className="flex items-center justify-center md:hidden">
						<img
							src="/images/logo.png"
							className="h-[60px]"
							alt="rccg youth province 1 logo"
						/>
					</div>
					<div className="flex justify-end gap-4 ml-auto">
						<Chip
							onClick={() => setActiveTab("leadership")}
							size="md"
							color={activeTab === "leadership" ? "primary" : "default"}
							label={"LEADERSHIP"}
						/>
						<Chip
							onClick={() => setActiveTab("parishes")}
							size="md"
							color={activeTab === "parishes" ? "primary" : "default"}
							label={"PARISHES"}
						/>
					</div>
				</div>

				<Input
					prefix={<SearchIcon className="mr-4" />}
					type="search"
					placeholder="Search"
				/>
			</div>

			<div className="space-y-7">
				{activeTab === "leadership" && (
					<div>
						<div className="mt-7">
							<h2 className="lg:text-2xl text-xl font-bold mb-4">
								Provincial Leadership
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{provincialLeadership.map(pastor => (
									<div
										key={pastor.id}
										className="aspect-square md:aspect-auto rounded-lg relative shadow-md lg:h-auto"
									>
										<div
											style={{
												background:
													"linear-gradient(180deg, rgba(34, 28, 28, 0) 0%, rgba(32, 27, 27, 0.6) 89.49%)",
											}}
											className="absolute inset-0 z-[5]"
										></div>
										<img
											src={pastor.image}
											alt={pastor.name}
											className="w-full h-full relative object-top object-cover rounded-lg"
										/>
										<div className="absolute z-10 bottom-4 px-4 left-0 ">
											<h3 className="text-lg font-semibold mt-2">{pastor.name}</h3>
											<p className="text-sm text-secondary">{pastor.role}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div>
							<h2 className="text-2xl font-bold mt-6 mb-4">Zonal Pastors</h2>
							<ul>
								{ZonalPastors.map(pastor => (
									<li key={pastor.id} className="py-2 flex gap-3">
										<img src={Image} alt="" />
										<div>
											<div>{pastor.name}</div>
											<div className="text-secondary text-sm">{pastor.zone}</div>
										</div>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h2 className="text-2xl font-bold mt-6 mb-4">Area Pastors</h2>
							<ul>
								{areaPastors.map(pastor => (
									<li key={pastor.id} className="py-2 flex gap-3">
										<img src={Image} alt="" />
										<div>
											<div>{pastor.name}</div>
											<div className="text-secondary text-sm">{pastor.area}</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
				{activeTab === "parishes" && (
					<div>
						<div>
							<div className="flex items-center gap-4 my-4 text-sm">
								{["zone", "area", "parish", "standalone"].map(category => (
									<Chip
										key={category}
										onClick={() => setActiveButton(category)}
										size="sm"
										color={activeButton === category ? "primary" : "default"}
										label={category.toUpperCase()}
									/>
								))}
							</div>
						</div>
						<div className="mt-7">
							{filteredParishes.length > 0 ? (
								filteredParishes.map(parish => (
									<div key={parish.id} className="py-4 rounded-lg flex gap-3">
										<div className="relative">
											<img src={Image2} alt="" className="w-20 h-20" />
											<p
												className={`absolute bottom-1 right-1 px-2 py-1 text-[8px] font-medium text-white rounded-full ${
													parish.category === "Area"
														? "bg-blue-500"
														: parish.category === "Zone"
														? "bg-green-500"
														: "bg-purple-500"
												}`}
											>
												{parish.category}
											</p>
										</div>
										<div>
											<h3 className="text-lg font-semibold">{parish.name}</h3>
											<p className="text-sm text-secondary">{parish.address}</p>
										</div>
									</div>
								))
							) : (
								<p className="text-center text-gray-500">
									No parishes found in this category
								</p>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

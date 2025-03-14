import { ProvinceIcon, SearchIcon } from "@/assets/icons";
import FilterIcon from "@/assets/icons/filter-icon";
import Button from "@/components/button";
import Chip from "@/components/chip";
import Input from "@/components/forms/input";
import TableComponent from "@/components/table";
import { useState } from "react";
import AddParishModal from "./modals/add-parish-modal";
const headCells = [
	{ id: "sn", label: "S/N", sortBy: "sn" },
	{
		id: "name",
		label: (
			<span>
				Name <strong>(Clickable)</strong>
			</span>
		),
		sortBy: "name",
	},
	{ id: "email", label: "Email", sortBy: "email" },
	{ id: "phone_number", label: "Phone Number", sortBy: "phone_number" },
	{ id: "date", label: "Date", sortBy: "date" },
	{ id: "role", label: "Role" }, // No sorting
	{ id: "action", label: "Action" }, // No sorting
];

export default function AdminParishes() {
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tableData = Array(10)
		.fill({
			name: "Razaq Doe",
			email: "razaqdoe@gmail.com",
			phone_number: "+2349012345678",
			date: "17th January, 2024",
			role: "Admin",
			action: "Edit/Delete",
		})
		.map((el, i) => ({ sn: i + 1, ...el }));

	const [filterBy, setfilterBy] = useState("");
	const filters = ["province", "standalone", "zonal hq", "area hq", "parish"];
	return (
		<div>
			<h1 className="pg-title">Dashboard</h1>
			<p className="font-light">620 praishes found</p>

			<div className="mt-6 mb-2 flex justify-between items-center flex-wrap gap-4">
				<div className="flex gap-4 items-center">
					<Input
						prefix={<SearchIcon />}
						type="search"
						placeholder="Search..."
						theme="outlinedLight"
						className="!mb-0"
						inputClass="pl-2"
					/>
					<Button className={"min-w-max"} color="white">
						Filter <FilterIcon />
					</Button>
				</div>
				<Button onClick={() => setIsModalOpen(true)} color="black">
					{" "}
					+ Add Parish
				</Button>
			</div>
			<div className="flex gap-4 flex-wrap my-4">
				<span>Filter</span>
				{filters.map(el => (
					<Chip
						onClick={() => {
							setfilterBy(el);
						}}
						size="sm"
						color={filterBy === el ? "primary" : "gray"}
						label={el.toUpperCase()}
						key={el}
					/>
				))}
			</div>
			<TableComponent
				headCells={headCells}
				tableData={tableData}
				showPagination
				totalItems={50}
				itemsPerPage={10}
				page={page}
				setPage={setPage}
				emptyStateProps={{
					title: "No Data Found",
					subTitle: "Try adjusting your filters or adding new data.",
					icon: <ProvinceIcon />,
				}}
			/>

			<AddParishModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</div>
	);
}

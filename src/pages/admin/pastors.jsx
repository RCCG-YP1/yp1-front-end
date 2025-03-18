import { ProvinceIcon, SearchIcon } from "@/assets/icons";
import FilterIcon from "@/assets/icons/filter-icon";
import Button from "@/components/button";
import Chip from "@/components/chip";
import Input from "@/components/forms/input";
import TableComponent from "@/components/table";
import { useState } from "react";
import PastorModal from "./modals/pastor-details-modal";
import AddPastorModal from "./modals/add-pastor-modal";
const headCells = [
	{
		id: "name",
		label: "Pastor's Name",
		sortBy: "name",
	},
	{ id: "level", label: "Level" },
	{ id: "parish", label: "Parish" },
];

export default function AdminPastors() {
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalDetailsOpen, setIsModalDetailsOpen] = useState(false);

	const tableData = Array(10)
		.fill({
			name: "Pst. Oluwagbemileke Adeboye",
			level: "PICP",
			parish: "Joseph Palace",
			email: "oluwagbemileke@gmail.com",
		})
		.map((el, i) => ({ sn: i + 1, ...el }));

	const [filterBy, setfilterBy] = useState("");
	const filters = [
		"PICP",
		"APICP",
		"ZONE",
		"Area",
		"parish",
		"assistant",
		"associate",
	];
	return (
		<div>
			<h1 className="pg-title">Dashboard</h1>
			<p className="font-light">620 Pastors found</p>

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
					+ Add Pastor
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
				onRowClick={() => setIsModalDetailsOpen(true)}
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

			<AddPastorModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<PastorModal
				isModalOpen={isModalDetailsOpen}
				setIsModalOpen={setIsModalDetailsOpen}
			/>
		</div>
	);
}

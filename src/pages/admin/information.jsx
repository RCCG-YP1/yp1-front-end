import { ProvinceIcon, SearchIcon } from "@/assets/icons";
import FilterIcon from "@/assets/icons/filter-icon";
import Button from "@/components/button";
import Input from "@/components/forms/input";
import TableComponent from "@/components/table";
import { useState } from "react";
import { truncateStr } from "@/utils";
import AddUpdateModal from "./modals/add-update-modal";
const headCells = [
	{
		id: "date",
		label: "Date",
		sortBy: "name",
	},
	{ id: "content", label: "Update" },
];

export default function AdminInformation() {
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tableData = Array(10)
		.fill({
			date: "13/01/2025",
			content: truncateStr(
				"Sidebar has been collecting the best design links of the day since October 2012. It's maintained by",
				100
			),
		})
		.map((el, i) => ({ sn: i + 1, ...el }));

	return (
		<div>
			<h1 className="pg-title">Information Center</h1>

			<div className="my-6 flex justify-between items-center flex-wrap gap-4">
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
					+ New Update
				</Button>
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

			<AddUpdateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</div>
	);
}

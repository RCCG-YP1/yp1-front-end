import { SearchIcon } from "@/assets/icons";
import FilterIcon from "@/assets/icons/filter-icon";
import Button from "@/components/button";
import Input from "@/components/forms/input";
import TableComponent from "@/components/table";
import { useState } from "react";
import AddParishModal from "./modals/add-parish-modal";
import MembersIcon from "@/assets/icons/members-icon";

const headCells = [
	{
		id: "name",
		label: "Name",
		sortBy: "name",
	},
	{ id: "parish", label: "Parish" },
	{ id: "status", label: "Status" },
	{ id: "phone_number", label: "Phone number" },
	{ id: "birthday", label: "Birthday" }, // No sorting
];

export default function AdminMembers() {
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tableData = Array(10)
		.fill({
			name: "Razaq Doe",
			parish: "LSC The Bridge",
			phone_number: "+2349012345678",
			birthday: "17th January, 2024",
			status: "Member",
		})
		.map((el, i) => ({ sn: i + 1, ...el }));

	return (
		<div>
			<h1 className="pg-title">Members</h1>
			<p className="font-light">620 members registered</p>

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
					icon: <MembersIcon />,
				}}
			/>

			<AddParishModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</div>
	);
}
